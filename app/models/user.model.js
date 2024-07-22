import mongoose from "mongoose";

const user = mongoose.model('User', new mongoose.Schema({
    name: {
        requred: true,
        type: String
    },
    email: {
        requred: true,
        type: String
    }
}))

export default user;