// As the last step of your lab, hook this up to index.html
function initMap() {
  // so much so familiar, but we will need this to inject markers later!
  const map = L.map('mymap').setView([38.7849, -76.8721], 10);
  const accessToken = 'pk.eyJ1IjoiY2FtdW1kMTUiLCJhIjoiY2wxbWxsbTlnMDFkYjNlbzRmMG9iODYxNSJ9.PVWjmTv1CBERzBPedY6oqw';
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: accessToken
  }).addTo(map);
  return map; // this "return" is how we get our active map object back for marker injection later
}

function placeMarker(array, map){
  let count = 0;
  map.eachLayer((layer)=>{
    if(layer instanceof L.Marker){
      layer.remove();
    }
  })
  array.forEach((item)=>{
    let coordinates = item.geocoded_column_1.coordinates;
    if(count === 0){
      map.panTo([coordinates[1],coordinates[0]]);
    }
    L.marker([coordinates[1],coordinates[0]]).addTo(map);
    count ++;
  })
}

function generateRandomInt(min, max) {
  return Math.floor((Math.random() * (max + 1 - min)) + min);
}
function inject(array) {
  const target = document.querySelector('.restaurants');
  target.innerHTML = '';
  array.forEach((elm) => {
    const str = `<li>${elm.name}<br/>${elm.zip}</li>`;
    target.innerHTML += str;
  });
}

function datahandler(array) {
  const target = document.querySelector('.restaurants');
  target.innerHTML = '';
  const range = [...Array(15).keys()];
  const rest = range.map((elm) => {
    const index = generateRandomInt(0, array.length);
    return array[index];
  });
  return rest;
}

async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('button');
  const restaurant = document.querySelector('#restaurant-name');
  const foodpreference = document.querySelector('#food-preference');
  const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  console.table(arrayFromJson.data); // this is called "dot notation"
  const map = initMap();
  // arrayFromJson.data - we're accessing a key called 'data' on the returned object
  // it contains all 1,000 records we need
  let currentArray;
  form.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
    currentArray = datahandler(arrayFromJson.data);
    inject(currentArray);
  });
  submit.style.display = 'block';
  if (arrayFromJson.data.length > 0) {
    currentArray = datahandler(arrayFromJson.data);
    console.log(currentArray);
    inject(currentArray);
    restaurant.addEventListener('input', (event) => {
      console.log(event.target.value);
      if (foodpreference.value) {
        const restfilter = currentArray.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
        const coordinateRestFilter = restfilter.filter((item)=> item.geocoded_column_1 && item.geocoded_column_1.coordinates);
        placeMarker(coordinateRestFilter, map);
        inject(restfilter);
      } else {
        const restfilter = currentArray.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
        const coordinateRestFilter = restfilter.filter((item)=> item.geocoded_column_1 && item.geocoded_column_1.coordinates);
        placeMarker(coordinateRestFilter, map);
        inject(restfilter);
      }
    });
    foodpreference.addEventListener('input', (event) => {
      console.log(event.target.value);
      if (restaurant.value) {
        const restfilter = currentArray.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
        const coordinateRestFilter = restfilter.filter((item)=> item.geocoded_column_1 && item.geocoded_column_1.coordinates);
        placeMarker(coordinateRestFilter, map);
        inject(restfilter);
      } else {
        const restfilter = currentArray.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
        const coordinateRestFilter = restfilter.filter((item)=> item.geocoded_column_1 && item.geocoded_column_1.coordinates);
        placeMarker(coordinateRestFilter, map);
        inject(restfilter);
      }
    });
  }
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
