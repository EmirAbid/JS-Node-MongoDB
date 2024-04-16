const fs = require('fs'); 
fs.readFile('./docs/text.txt', (err,data)=> {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
}); // (err,data) is a function to print data. 
// Writing file 
fs.writeFile('./docs/text1.txt', 'hello World', ()=> {
    console.log('file was written.');
});
// make Directory 
if(fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=> {
        if(err){
          console.log(err);  
        }
        console.log('Folder created');
    })
}else{
    fs.rmdir('./assets',(err)=> { // delete Directory
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
}
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=> { // delete file methode
        if(err){
            console.log(err)
        }
        console.log('file deleted');
    })
}
