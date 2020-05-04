// JavaScript source code
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
    name: String,
    username: { type: String, required: true, index: { unique: true } },
    password: {type:String, required: true,select: false}
});
UserSchema.pre('save', function (next){
    var user = this;
    if (!user.isModified('password')) return next();

});