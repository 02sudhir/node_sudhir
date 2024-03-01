require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubdata = {
  "ext": ".js, .mjs, .html, .css, .coffee, .litcoffee, .json, .yaml",
  "ignore": ["seed-credentials.json"]
};



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' ,(req,res) =>{
    res.send("kya chicha")
})


app.get('/sudhirdotcom', (req,res) => {
    res.send("<h1> welcome to my site</h1>");


app.get('/github' , (req,res) => {
  res.json(githubdata);
})

})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})