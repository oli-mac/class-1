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

let users = [{
    "id":"1",
    "name":"abe"
},{
    "id":"2",
    "name":"kebe"
},{
    "id":"3",
    "name":"gube"
}];
//resolv end points
app.get('/',(req,res)=>{
    res.send('hello bd');
})//first parameter is always the url

app.get('/name/:n',(req,res)=>{
    res.send(req.params);
})//first parameter is always the url
// app.get('/name/:n',(req,res)=>{
//     res.send('hello ${req.params}');
// })//first parameter is always the url
app.get('/namej/:n',(req,res)=>{
    res.json('hello ${req.params}');
})//display as a string like jason 
app.get('/users',(req,res)=>{
    res.send(users);
})//display users lsit
app.get('/users/:id',(req,res)=>{
    const usr = users.find((u)=> u.id === req.params.id);

    if(usr){
        res.send(usr);
        return;
    }
    res.status(404).send("user not found");

})//display specifik user from users lsit
//post end points
app.listen(3000, ()=>{
    console.log("server connected");
});