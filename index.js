const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000


const chef = require('./data/chef.json')
const recipe = require('./data/receipe.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('chef recipe is running')
})

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/', (req, res) => {
    res.send(recipe);
})

app.get('/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedChef = recipe.find(r => r.chef_id === id)
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})