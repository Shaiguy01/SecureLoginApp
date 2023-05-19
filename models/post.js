const mongoose = require('mongoose')

const PostSchema = mongoose.Schema(
    {
    id: {type: String, required:true},
    post: {type: String, required:true}
    }
)

module.exports = mongoose.model('Post', PostSchema)