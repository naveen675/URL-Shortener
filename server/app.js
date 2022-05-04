const express = require('express');
const app  = express();

app.get('/', (req,res)=>{

    res.send('hello')
})

const port = process.env.PORT || 3001;


app.get('/api/url/:url', (req,res) => {
    
})

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});