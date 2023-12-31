const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://SaifySheikh:Sharif4565@cluster0.xbgnrhv.mongodb.net/employee")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

const LogInCollection=new mongoose.model('Admin',logInSchema)

module.exports=LogInCollection