const {Schema, model} = require('mongoose');

const TaskSchema = new Schema({
    client: {type: String},
    title: {type: String},
    description: {type: String},
    done: {type: Boolean, default: false}
})

const TaskModel = model('Task', TaskSchema)

module.exports = TaskModel;