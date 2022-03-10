// As the last step of your lab, hook this up to index.html
function generateRandomInt(min,max){
  return Math.floor((Math.random() * (max+1 -min)) +min);
}
function datahandler(array) {
  const target = document.querySelector('.restaurants');
  target.innerHTML = '';
  const range = [...Array(15).keys()];
  const rest = range.map(elm=>{
    const index = generateRandomInt(0,array.length);
    return array[index];
  })
  rest.forEach(elm=>{
    const str = `<li>${elm.name}</li>`;
    target.innerHTML+= str;
  })
}


async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.main_form');
    const submit = document.querySelector('button');
    const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
    const arrayFromJson = await results.json(); // This changes it into data we can use - an object
    console.table(arrayFromJson.data); // this is called "dot notation"
    // arrayFromJson.data - we're accessing a key called 'data' on the returned object
    // it contains all 1,000 records we need 
    submit.style.display = 'block';
    if(arrayFromJson.data.length > 0){
      datahandler(arrayFromJson.data)
    }
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
