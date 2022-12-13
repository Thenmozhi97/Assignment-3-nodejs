const fs = require('fs');
const http = require('http')

fs.writeFile('index.html','<h1> Hello World </h1> \n<p> This is Honey </p>',()=>{
    
})

http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        res.write(data);
         return res.end();
    })
}).listen(5000);
