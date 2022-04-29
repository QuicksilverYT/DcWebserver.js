const express = require('express');
const server = express();
require("dotenv").config();

const username = process.env.USERNAME; 
const api_key = process.env.API_KEY;; 

server.all('/', (req, res)=>{
  res.send('Your bot is alive')
})
function KeepAlive(){
   server.listen(process.env.PORT, ()=>console.log("Server is ready!"))
}
module.exports = KeepAlive;