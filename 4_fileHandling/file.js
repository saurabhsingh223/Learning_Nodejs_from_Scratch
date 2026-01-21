// fs is the inbuild module to handle file in nodejs
const fs = require("fs");


//write file

// fs.writeFile():- use to create files in the system, it takes two arguments, first is the name of the file and 2nd is the content of the file

// synchronous file writing
// fs.writeFileSync('./test.txt', 'Hey! there from synchronous');

// Async file writing
// fs.writeFile("./test2.txt", "hey there from asynchronous", (err)=>{})


// reading file
// fs.readFile()


// synchronous: synchronous return the result, and we need to manuaaly handle errors
// const result = fs.readFileSync("./read.txt", "utf-8")
// console.log(result);


// Async
fs.readFile("read.txt", "utf-8", (err, result)=>{
    if(err){
        console.log("Error: ", err);       
    } else{
        // console.log(result);
        
    }
})


// reading stats of the file
// statSync
const stat = fs.statSync("./test.txt")
// console.log(stat);


// os module

const os = require("os")

console.log(os.cpus().length) // tells the no of threads in the computer os system