const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://test:test123@express-app.x93vr.mongodb.net/expree-app?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  },function(error) {
    if(error){
      console.error("Error while connecting database\n", error);
      return false;
    }
    console.log('\x1b[32m%s\x1b[0m', 'Database connected...');
  });

app.get('/', (req, res) => {
  res.send('Welcome to CI/CD with AWS..');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
});


module.exports = app;