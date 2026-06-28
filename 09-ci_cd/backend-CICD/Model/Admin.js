import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email: {type: String, unique: true, require: true},
    password: {type: String, require: true} 
});

export const Admin = mongoose.model.Admin || mongoose.model('admin', adminSchema);
