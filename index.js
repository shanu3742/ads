const express = require("express");
const path = require("path");
const hbs = require("hbs");

require("./db/conn")
const Reg = require("./models/register")
const port = process.env.PORT||3002;
const app = express();
const staticpath = path.join(__dirname,"/css")
//console.log(path.join(__dirname,"/views/main"))
const actualpath = path.join(__dirname,"/views/main")
app.use(express.static(staticpath));
app.use(express.urlencoded({extended:false}));
app.set("view engine","hbs")

app.set("views",actualpath)


app.get("/home",(req,res) =>{
    res.render("index.hbs")
})
app.get("/regs",(req,res) =>{
    res.render('register.hbs')
})
app.post("/regs",async(req,res) =>{
    try{
        //const name=req.body.name;
        //console.log(name);
        //const password = req.body.password;
        //console.log(password)
        const  info = new  Reg({
           
            name:req.body.name,
        
            mobile:req.body.mobile,
            email:req.body.email,
            password:req.body.password,
           
        })
        console.log(info)

        const result =await info.save();
        res.send("if you win we contact you after 31 march")
        console.log(result);
       

    }catch(err){
        res.status(401).send(err)
    }
})
app.listen(port,(req,res) => {
    console.log("done");
})