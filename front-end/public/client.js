let resultsDiv = document.getElementById('searchResults')

let bbqButton = document.getElementById('all')
bbqButton.addEventListener('click', all)

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