const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    threadId: {
        type: Schema.Types.ObjectId,
        ref: 'thread',
        required: [true, 'A comment needs a valid thread id']
    },
    username: {
        type: String,
        required: [true, 'A comment needs to have a username.'],
    },
    content: {
        type: String,
        required: [true, 'A comment needs to have content.'],
    },
    subcomments: [{
        type: Schema.Types.ObjectId,
        ref: 'subcomment',
        default: [],
        autopopulate: true,
    }],
    upvotes: [{
        type: Schema.Types.String,
        ref: 'user',
        default: []
    }],
    downvotes: [{
        type: Schema.Types.String,
        ref: 'user',
        default: []
    }]
})

// mongoose plugin to always populate fields
// populate can, in stead of retrieve id's of subcomments, actually retrieve subcomments
CommentSchema.plugin(require('mongoose-autopopulate'));

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;