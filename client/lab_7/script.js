// As the last step of your lab, hook this up to index.html
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
 return rest
}

async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('button');
  const restaurant = document.querySelector('#restaurant-name');
  const foodpreference = document.querySelector('#food-preference');
  const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  console.table(arrayFromJson.data); // this is called "dot notation"
  // arrayFromJson.data - we're accessing a key called 'data' on the returned object
  // it contains all 1,000 records we need  
  let currentArray;
  form.addEventListener("submit", async(submitEvent) => {
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
        if (foodpreference.value){
        const restfilter = currentArray.filter((item) => 
        item.name.toLowerCase().includes(event.target.value.toLowerCase())&&item.zip.includes(foodpreference.value));
        inject(restfilter);
        }
        else {
            const restfilter = currentArray.filter((item) => 
        item.name.toLowerCase().includes(event.target.value.toLowerCase()));
        inject(restfilter);
        }
    });
    foodpreference.addEventListener('input', (event) => {
        console.log(event.target.value);
        if (restaurant.value){
        const restfilter = currentArray.filter((item) => 
        item.name.toLowerCase().includes(restaurant.value.toLowerCase())&&item.zip.includes(event.target.value));
        inject(restfilter);
        }
        else {
        const restfilter = currentArray.filter((item) => 
        item.zip.includes(event.target.value));
        inject(restfilter);
        }
    });
  }
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
