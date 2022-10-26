const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
const news = require('./data/islamic.json')

const catagory = require('./data/catagories.json')
app.get('/',(req, res)=>{
 res.send('news api running');

});
app.get('/islamic-catagories', (req, res) =>{
 res.send(catagory)
});
app.get('/news/:id', (req, res)=>{
 const id = req.params.id
 const selectNews =news.find(n =>n._id ===id)
 res.send(selectNews)
})
app.get('/catagory/:id', (req, res)=>{
 const id =req.params.id
 if(id=== '08'){
  res.send(news)
 }
 else{
  
  const catagoryId = news.filter(f => f.category_id ===id)
  res.send(catagoryId)
 }
})
app.get('/news', (req, res)=>{
 res.send(news)
})
 
app.listen(port, ()=>{
 console.log('multi news server, ',port);
})