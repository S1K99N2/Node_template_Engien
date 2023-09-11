
































// const express=require('express');
// const path=require('path');
// const app=express();
// const dirPath=path.join(__dirname,'viwes');


// app.get("",(req,res)=>{
//     res.sendFile(`${dirPath}/home.html`)
// })
// app.get("/blog", (req, res) => {
//     res.sendFile(`${dirPath}/blog.html`)
// })
// app.get("/contect", (req, res) => {
//     res.sendFile(`${dirPath}/contect.html`)
// })
// app.get("*", (req, res) => {
//     res.sendFile(`${dirPath}/404page.html`)
// })

// app.listen(5000);


// const express=require('express')
// const app=express();

// app.get("/",(req,res)=>{
    // console.log(`hello this is`, req.query.name)
    // res.send(`<input type="text" placeholder="user name" value=${req.query.name}/>`);
    
// })
// app.listen(5000);
// const express=require('express');
// const app=express();

// app.get("",(req,res)=>{
//     res.send(`<h1>hi this is me and we have done your work in Home</h1>`)
// })
// app.get("/blog", (req, res) => {
//     res.send(`<h1>hi this is me and we have done your work in Blog</h1>`)
// })
// app.get("/project", (req, res) => {
//     res.send(`<h1>hi this is me and we have done your work in Project</h1>`)
// })
// app.get("/about", (req, res) => {
//     res.send(`<h1>hi this is me and we have done your work in About</h1>`)
// })
// app.listen(5000);


// const fs =require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'Gole');
// const filepath=`${dirPath}/hello.txt`;

// fs.writeFileSync(filepath,' this goes wrong in side work');

// fs.readFile(filepath,'utf8',(err,file)=>{
//     console.log(file);
// })

// fs.appendFile(filepath,' and this very bed work',(err)=>{
//     if(!err){
//         console.log('file is Update');    
//     }
// })

// fs.rename(filepath,`${dirPath}/ROck.txt`,(err)=>{
//     if(err){
//         console.log('file name is updates');
//     }
// })

// fs.unlinkSync(`${dirPath}/ROck.txt`)
// fs.unlinkSync(`${dirPath}/ROck.txt`)




// const fs=require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'Gole');

// for(i=0;i<5; i++){
//     fs.writeFileSync(`${dirPath}/niraj${i}.txt`,'hellodcjdskjcks')
// }
// fs.readdir(dirPath,(err,res)=>{
//     res.forEach((item)=>{
//         console.log('this is name',item);
        
//     })
// })




// const fs=require('fs');

// const input=process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log('invalid input');  
// }



// const http=require('http');
// const app=require('./app');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'application\JSON'});
//     res.write(JSON.stringify(app));
//     res.end();

// }).listen(5000);





// const http=require('http');

// function data(req,res){
//     res.write(`<h1>hello node world i'm your new user u can support me</h1>`);
//     res.end();
// }
// http.createServer(data).listen(5000);