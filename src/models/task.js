const mongoose = require('mongoose')
const validator = require('validator')


const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'   //exact same User model name (fetch task own user /mongoose has a feature)
    }
},{
    timestamps:true
})

const Task = mongoose.model('Task', taskSchema)



module.exports = Task