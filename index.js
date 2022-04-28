const express = require('express');
const server = express();

const username = "the_winds"; 
const api_key = "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"; 

server.all('/', (req, res)=>{
  res.send('Your bot is alive')
})
function KeepAlive(){
   server.listen(3000, ()=>console.log("Server is ready!"))
}
module.exports = KeepAlive;