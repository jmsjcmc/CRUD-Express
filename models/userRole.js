import mongoose from "mongoose";

const userRoleSchema = new mongoose.Schema({
userID: {type:mongoose.Schema.Types.ObjectId, ref: 'User', required:true},
roleID: {type:mongoose.Schema.Types.ObjectId, ref: 'Role', required:true}
}, {timestamps:true})

export default mongoose.model('UserRole', userRoleSchema);