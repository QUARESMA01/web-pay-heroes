import { Schema } from "mongoose";

export const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {timestamps: true}); 