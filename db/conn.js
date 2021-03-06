const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/prize-details",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection is done...")
}).catch((err) => {
    console.log(err)
})