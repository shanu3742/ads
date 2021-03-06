const mongoose = require("mongoose");
const validator = require("validator");

const prizeReg = new mongoose.Schema({
    name:{
        type:String,
        require:true

    },
    mobile:{
        type:Number,
        minLength:10,
        maxLength:12,
        unique:[true, "try with different number"]

    },
    email:{
        type:String,
        require:true,
        unique:[true,"email is already exist"],
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("invalid email")
            }
        }
    },
password:{
    type:String,
    minLength:8,
    maxLength:12,


}
    })

    const Reg = new mongoose.model("Reg",prizeReg );
    module.exports = Reg;
