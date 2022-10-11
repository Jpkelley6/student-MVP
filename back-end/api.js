const express = require('express')
const app = express()
const { Client } = require('pg')
const config = require('./config.js')[process.env.NODE_ENV || 'dev']
const client = new Client({
    connectionString: config.connectionString
})
client.connect()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const PORT = config.port
const { response } = require('express')

app.get('/api/meals', (req, res, next) => {
    return res.headersSent == true ? next() :
        client.query('SELECT * FROM meals')
            .then(results => res.send(results.rows))
})

app.get('/api/meals/BBQ', (req, res) => {
    client.query("SELECT * FROM meals WHERE meals.meal_type = 'BBQ'")
        .then(results => {
            if (results.rows.length === 0) {
                res.status(404)
            }
            res.send(results.rows)
        })
        .catch(error => {
            console.error(error)
        })
})

app.get('/api/meals/takeOut', (req, res) => {
    client.query("SELECT * FROM meals WHERE meals.meal_type = 'Take-out'")
        .then(results => {
            if (results.rows.length === 0) {
                res.status(404)
            }
            res.send(results.rows)
        })
        .catch(error => {
            console.error(error)
        })
})

app.get('/api/meals/usersChoices', (req, res) => {
    client.query("SELECT users_name as name, meal_name as food FROM users JOIN meals ON meals.meal_id = users.meal_id")
        .then(results => {
            if (results.rows.length === 0) {
                res.status(404)
            }
            res.send(results.rows)
        })
        .catch(error => {
            console.error(error)
        })
})

app.post('/api/meals/meals', (req, res) => {
    let { meal_name, meal_type, meal_description } = req.body;
    client.query(`INSERT INTO meals (meal_name, meal_type, meal_description) VALUES ($1, $2, $3)`, [meal_name, meal_type, meal_description])
        .then(response => {
            res.status(201).send(`Added meal`)
            res.send('Updated')
        })
        .catch(error => {
            console.log(error)
        })
})

app.post('/api/meals/users', (req, res) => {
    let { users_name, meal_id } = req.body;
    client.query(`INSERT INTO users (users_name, meal_id) VALUES ($1, $2)`, [users_name, meal_id])
        .then(response => {
            res.status(201).send(`Added user`)
            res.send('Updated')
        })
        .catch(error => {
            console.log(error)
        })
})

//port listening
app.listen(PORT, () => {
    console.log('Server is running', PORT)
})