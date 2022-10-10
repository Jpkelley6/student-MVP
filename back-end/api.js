//importing express
const express = require('express')
//invoking express
const app = express()
//importing pg
const {Client} =  require('pg')
//connection string
const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/meals'
//connection string connection 
const client = new Client({
    connectionString: connectionString
})
//connect the client 
client.connect()
//using express.json
app.use(express.json())
// importing cors 
const cors = require('cors')
//using cors
app.use(cors())
// our port
const PORT = process.env.PORT || 3000
const {response} = require('express')


app.get('/api/meals', (req, res, next) => {
    return res.headersSent == true ? next() :
    client.query('SELECT * FROM meals')
    .then(results => res.send(results.rows))
})

app.get('/api/meals/BBQ', (req, res, next) => {
    client.query("SELECT * FROM meals WHERE meals.meal_type = 'BBQ'")
    .then(results => 
        results.rows.length === 0 ? res.send(next()) :
        res.send(results.rows))
})

app.get('/api/meals/takeOut', (req, res, next) => {
    client.query("SELECT * FROM meals WHERE meals.meal_type = 'Take-out'")
    .then(results => 
        results.rows.length === 0 ? res.send(next()) :
        res.send(results.rows))
})

//port listening
app.listen(PORT ,()=> {
    console.log('Server is running', PORT)
})