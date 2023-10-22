const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    title : {
        type : String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    date: {
        type : String,
        required : true
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    },
});

const user = mongoose.model('schedule', userSchema);
module.exports = user;


