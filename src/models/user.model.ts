import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim: true
    },
    lastname:{
        type: String,
        required: true,
        trim: true
    },
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/.+\@.+\../, 'Please use valid email address']
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
        select: false
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, {timestamps: true});
/**
 * Hash password before saving user
 */
userSchema.pre('save', async function (next){
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});
/**
 * Compare entered password with stored hash
 * @param enteredPassword 
 * @returns 
 */
userSchema.methods.comparePassword = async function (enteredPassword){
    return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);