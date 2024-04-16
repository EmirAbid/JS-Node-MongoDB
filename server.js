const http = require('http'); // import module http
const fs = require('fs');
const _ = require('lodash');
const server = http.createServer((req, res)=> {
    console.log(req.url, req.method);
    var num = _
    // set Header Content type 
    res.setHeader('Content-Type', 'text/html');
    let path ='./views/';
    switch(req.url){
        case '/': 
            path+= 'index.html';
            res.statusCode = 200; 
            break;
        case '/about': 
            path+= 'about.html';
            res.statusCode = 200 ; 
            break; 
        case '/about-me': 
            res.statusCode = 301; 
            res.setHeader('Location', '/about');
            res.end();
            break;
        default : 
            path += '/404.html'; 
            res.statusCode = 404; 
            break;

    }
    /* 
    res.write('<head><link rel="styleseet" href="#"></head>');
    res.write('<p>hello, ninjas</p>'); 
    res.write('<p> hello again, ninjas </p>');
    res.end(); //ending the response which sent to the browser !*/
    fs.readFile(path, (err,data)=> {
        if(err){
            console.log(err)
        }else{
            res.end(data)
        }
    })
}); 
server.listen(3000, 'localhost', ()=> {
    console.log('listen for requesz on port 3000');
});