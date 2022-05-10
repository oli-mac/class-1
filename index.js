//web server===============================================

// const http = require('http');





// const server = http.createServer(
//     (req,res) =>{
//         if(req.url === '/'){
//             res.write('hello bd');
//             res.end();
//         }//check the requiest "/"
//         if(req.url === '/courses'){
//             res.write('hello courses');
            
//         }//check the requiest "/"
//     }

// ); //a built in function that acceptes a call back function
// server.listen(1000);

//========================================express

const express = require('express');//import exprees

const app = express();//assing value
//resolv end points
app.get('/',(req,res)=>{
    res.send('hello bd');
})//first parameter is always the url

//post end points
app.listen(3000, ()=>{
    console.log("server connected");
});