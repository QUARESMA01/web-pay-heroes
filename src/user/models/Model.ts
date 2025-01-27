import{Schena} from "mongoose";


export const userSchena = new Schena({
    username: {type: String, required: true, unique:true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    passoword : {type : String}
