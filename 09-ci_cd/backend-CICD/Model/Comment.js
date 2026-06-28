import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {type: String, require: true},
    name: {type: String, require: true},
    blog: {type: mongoose.Schema.Types.ObjectId, ref: 'blog', require: true},
    isApproved: {type:Boolean, default: false}
}, {
    timestamps: true 
});

const Comment = mongoose.model.comment || mongoose.model("comment", commentSchema);

export default Comment;