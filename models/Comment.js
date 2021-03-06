const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    Text: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;