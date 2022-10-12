let resultsDiv = document.getElementById('searchResults')

let allButton = document.getElementById('all')
allButton.addEventListener('click', all)

let bbqButton = document.getElementById('BBQ')
bbqButton.addEventListener('click', getBBQ)

let takeOutButton = document.getElementById('takeOut')
takeOutButton.addEventListener('click', getTakeOut)

let addMealButton = document.getElementById('newItem')
addMealButton.addEventListener('click', addMeal)

let addUserButton = document.getElementById('userSelect')
addUserButton.addEventListener('click', addUserChoice)

let UserChoiceButton = document.getElementById('userChoice')
UserChoiceButton.addEventListener('click', getAllChoices)

let URL = 'https://bbq-meal-builder.onrender.com/api/'
let devURL = 'http://127.0.0.1:3000/api/'

function all() {
   resultsDiv.innerHTML = ''
   resultsDiv.style.display = 'block'
   fetch(`${URL}meals`)
      .then(response => response.json())
      .then(data => {
         let mealObj;
         for (let i = 0; i < data.length; i++) {
            mealObj = data[i]
            let newDiv = document.createElement('div');
            newDiv.textContent = mealObj.meal_id + '.' + ' ' + mealObj.meal_name
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
   resultsDiv.style.display = 'block'
   fetch(`${URL}meals/BBQ`)
      .then(response => response.json())
      .then(data => {
         let mealObj;
         for (let i = 0; i < data.length; i++) {
            mealObj = data[i]
            let newDiv = document.createElement('div');
            newDiv.textContent = mealObj.meal_id + '.' + ' ' + mealObj.meal_name
            resultsDiv.append(newDiv)

            let newDescripDiv = document.createElement('div')
            newDescripDiv.textContent = mealObj.meal_description
            resultsDiv.append(newDescripDiv)
         }
      })
      .catch(error => console.error(error))
}

function getAllChoices() {
   resultsDiv.innerHTML = ''
   resultsDiv.style.display = 'block'
   fetch(`${URL}meals/usersChoices`)
      .then(response => response.json())
      .then(data => {
         let mealObj;
         if (data.length === 0) {
            resultsDiv.style.display = 'none'
            alert('No guests added')
            return
         }
         for (let i = 0; i < data.length; i++) {
            mealObj = data[i]
            let newDiv = document.createElement('div');
            newDiv.textContent = mealObj.name + ' is having ' + mealObj.food
            resultsDiv.append(newDiv)
         }
      })
      .catch(error => {
         console.error(error)
      })
}

function getTakeOut() {
   resultsDiv.innerHTML = ''
   resultsDiv.style.display = 'block'
   fetch(`${URL}meals/takeOut`)
      .then(response => response.json())
      .then(data => {
         let mealObj;
         for (let i = 0; i < data.length; i++) {
            mealObj = data[i]
            let newDiv = document.createElement('div');
            newDiv.textContent = mealObj.meal_id + '.' + ' ' + mealObj.meal_name
            resultsDiv.append(newDiv)

            let newDescripDiv = document.createElement('div')
            newDescripDiv.textContent = mealObj.meal_description
            resultsDiv.append(newDescripDiv)
         }
      })
      .catch(error => console.error(error))
}

function addMeal() {
   let input1 = document.getElementById('newMealName')
   let input2 = document.getElementById('newMealType')
   let input3 = document.getElementById('NewMealDesc')
   let update = {
      'meal_name': input1.value,
      'meal_type': input2.value,
      'meal_description': input3.value
   }
   if (input1.value === '' || input2.value === '' || input3.value === 0) {
      alert('Please fill in a fields')
      return
   }
   fetch(`${URL}meals/meals`, {
      method: 'POST',
      mode: 'cors',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
   })
      .then(results => {
         all()
      })
      .catch(error => {
         console.log(error)
      })
}

function addUserChoice() {
   let input1 = document.getElementById('userName')
   let input2 = document.getElementById('mealNumber')
   let update = {
      'users_name': input1.value,
      'meal_id': input2.value,
   }
   if (input1.value === '' || input2.value === '') {
      alert('Please fill in a fields')
      return
   }
   fetch(`${URL}meals/users`, {
      method: 'POST',
      mode: 'cors',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
   })
      .then(results => {
         getAllChoices()
      })
      .catch(error => {
         console.log(error)
      })
}