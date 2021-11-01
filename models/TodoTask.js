const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('TodoTask', todoTaskSchema);
