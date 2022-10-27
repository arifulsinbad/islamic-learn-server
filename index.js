const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
const islamic = require('./data/islamic.json')

const catagory = require('./data/catagories.json')
app.get('/',(req, res)=>{
 res.send('islamic api running');

});
app.get('/islamic-catagory', (req, res)=>{
 res.send(catagory)
})
app.get('/islamic/:id', (req, res)=>{
 const id = req.params.id
 const selectIslamic =islamic.find(n =>n._id ===id)
 res.send(selectIslamic)
})
app.get('/catagory/:id', (req, res)=>{
 const id =req.params.id
 if(id=== '08'){
  res.send(islamic)
 }
 else{
  
  const catagoryId = islamic.filter(f => f.category_id ===id)
  res.send(catagoryId)
 }
})
app.get('/islamic', (req, res)=>{
 res.send(islamic)
})
 
app.listen(port, ()=>{
 console.log('islamic learn server, ',port);
})