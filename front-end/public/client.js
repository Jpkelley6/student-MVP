let resultsDiv = document.getElementById('searchResults')

let bbqButton = document.getElementById('BBQ')
bbqButton.addEventListener('click', BBQ)

function BBQ() {
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

// async function BBQ() {
//     fetch("http://127.0.0.1:3000/api/meals", {
//        method:'GET',
//        headers: {
//           'Content-Type': 'application/json'
//           }
//        })
//     .then(response => response.json())
//     .then(data => console.log(data))


//     try {
//     const response = await fetch("http://127.0.0.1:3000/api/meals", {
//        method:'GET',
//        headers: {
//           'Content-Type': 'application/json'
//           }
//        })
//     const data = await response;
//     console.log(data)
//     }
//     catch(error) {
//        console.log(error)
//     // }
