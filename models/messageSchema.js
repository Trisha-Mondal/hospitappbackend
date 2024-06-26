import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First Name Must Contain At Least 3 Characters!"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Last Name Must Contain At Least 3 Characters!"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Provide a Valid Email"]
    },
    phone: {
        type: String,
        required: true, // Corrected to true
        minlength: [11, "Phone Number Must Contain 11 Digits!"],
        maxlength: [11, "Phone Number Must Contain 11 Digits!"]
    },
    message: {
        type: String,
        required: true,
        minlength: [10, "Message Must Contain At Least 10 Characters!"]
    }
});

export const Message = mongoose.model("Message", messageSchema);