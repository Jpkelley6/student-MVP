const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors')

app.use(express.json())
app.use('/', express.static('public'))
app.use(cors())
app.listen(PORT ,()=> {
    console.log('ITS WORKING', PORT)
})