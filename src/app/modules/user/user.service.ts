import User from "./user.model";

export const createUserToDB =async () =>{
    const user =await new User({
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
      });
      await user.save();
     return(`user data saved ${user}`);

}