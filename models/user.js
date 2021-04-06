const bcrypt = require("bcryptjs")
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    gamelist: [],
    
})
UserSchema.add.validPassword=(password)=>{return bcrypt.compareSync(password,this.password)};
// UserSchema.pre("save",(email)=>{
//     email.password=bcrypt.hashSync(email.password, bcrypt.genSaltSync(10) , null);
// })
const User = mongoose.model("User",UserSchema)
module.exports = User;