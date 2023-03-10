const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: {type: String},
    name: {type: String},
    email: {type: String},
    avatar: {type: String, default: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
})

const UserModel = model("User", UserSchema);

module.exports = UserModel;