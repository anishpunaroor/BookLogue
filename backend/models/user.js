import mongoose from "mongoose"; 
import bcrypt from "bcryptjs"; 

const userSchema = mongoose.Schema(
    {
        name: {
            type: String, 
            required: true, 
        }, 
        email: {
            type: String, 
            required: true, 
            unique: true,
        }, 
        password: {
            type: String,
            required: true, 
        }, 
        isAdmin: {
            type: Boolean, 
            required: true, 
            default: false, 
        },
    },
    {
        timestamps: true
    }
); 

userSchema.methods.matchPassword = async function (plainPassword) {
    return await bcrypt.compare(plainPassword, this.password);
}; 

userSchema.pre("save", async function (next) {
    let user = this; 

    if (!user.isModified("password")) {
        next(); 
    }
    if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt); 
    }
});

const User = mongoose.model("User", userSchema);
export default User; 