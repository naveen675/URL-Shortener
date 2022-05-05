const express = require('express');
const config = require('./data');
const app  = express();
const shortenUri = require('./Router/urlShortener');
const originalUri = require('./Router/originalUrl');
const port = process.env.PORT || 3001;

var db = config['module'];

app.use('/', originalUri);
app.use('/uri',shortenUri);
app.use(express.json()); 


app.get('/home', (req,res)=>{

    res.send("Welcome to Shortener");
})






app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});


module.exports = app;