let resultsDiv = document.getElementById('searchResults')

let allButton = document.getElementById('all')
allButton.addEventListener('click', all)

let bbqButton = document.getElementById('BBQ')
bbqButton.addEventListener('click', getBBQ)

let takeOutButton = document.getElementById('takeOut')
takeOutButton.addEventListener('click', getTakeOut)

function all() {
resultsDiv.innerHTML = ''
fetch('http://127.0.0.1:3000/api/meals')
.then(response=> response.json())
.then(data => {
   let mealObj;
   for (let i = 0; i < data.length; i++) {
      mealObj = data[i]
      let newDiv = document.createElement('div');
      newDiv.textContent = mealObj.meal_name
      resultsDiv.append(newDiv)
      
       let newDescripDiv = document.createElement('div')
       newDescripDiv.textContent = mealObj.meal_description
       resultsDiv.append(newDescripDiv)
   }
})
.catch(error => console.error(error))
}

function getBBQ() {
    resultsDiv.innerHTML = ''
    fetch('http://127.0.0.1:3000/api/meals/BBQ')
    .then(response=> response.json())
    .then(data => {
       let mealObj;
       for (let i = 0; i < data.length; i++) {
          mealObj = data[i]
          let newDiv = document.createElement('div');
          newDiv.textContent = mealObj.meal_name
          resultsDiv.append(newDiv)
          
           let newDescripDiv = document.createElement('div')
           newDescripDiv.textContent = mealObj.meal_description
           resultsDiv.append(newDescripDiv)
       }
    })
    .catch(error => console.error(error))
}

function getTakeOut() {
    resultsDiv.innerHTML = ''
    fetch('http://127.0.0.1:3000/api/meals/takeOut')
    .then(response=> response.json())
    .then(data => {
       let mealObj;
       for (let i = 0; i < data.length; i++) {
          mealObj = data[i]
          let newDiv = document.createElement('div');
          newDiv.textContent = mealObj.meal_name
          resultsDiv.append(newDiv)
          
           let newDescripDiv = document.createElement('div')
           newDescripDiv.textContent = mealObj.meal_description
           resultsDiv.append(newDescripDiv)
       }
    })
    .catch(error => console.error(error))
}