const express = require("express")
const hbs = require("hbs")
const path = require("path")

const app = express()

app.set('view engine',"hbs")
app.set("views" , path.join(__dirname,'views'))

app.get("/",(req,res)=>{
    const x = [
        { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", age: 28, isLogin: true },
        { id: 2, name: "Bob Smith", email: "bob.smith@example.com", age: 34, isLogin: false },
        { id: 3, name: "Charlie Davis", email: "charlie.davis@example.com", age: 22, isLogin: true },
        { id: 4, name: "Diana Moore", email: "diana.moore@example.com", age: 30, isLogin: false },
        { id: 5, name: "Ethan Brown", email: "ethan.brown@example.com", age: 27, isLogin: true },
        { id: 6, name: "Fiona Clark", email: "fiona.clark@example.com", age: 25, isLogin: false },
        { id: 7, name: "George Wilson", email: "george.wilson@example.com", age: 31, isLogin: true },
        { id: 8, name: "Hannah Lewis", email: "hannah.lewis@example.com", age: 29, isLogin: false },
        { id: 9, name: "Ian Walker", email: "ian.walker@example.com", age: 33, isLogin: true },
        { id: 10, name: "Julia Hall", email: "julia.hall@example.com", age: 26, isLogin: false }
      ];
      
    res.render("index",{users:x})
})

app.get("/about",(req,res)=>{

    res.send("This is for about page")
})

app.listen(3000,()=>{
    console.log("Now express run in 3000 port")
})

//heelo this is just comment