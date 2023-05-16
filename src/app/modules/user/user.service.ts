import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB =async (payload:IUser):Promise<IUser> =>{
    const user = new User(payload);
    await user.save();
    return user;

}
//get all user from database
export const getUsersFromDB =async ():Promise<IUser[]>=>{
    const users = await User.find();
    return users;

}
/* 
{
        id:'123fg8',
        email:'sabbir.ziauddin',
        role:'student',
        password:'12365478',
        name:{
            firsName:'sabbir',
            lastName:'ziauddin'
        },
        dateOfBirth :'30/10/1991',
        gender: "female",
        contactNo:'01708237295',
        emergencyAddress:'0185325874'
      } */