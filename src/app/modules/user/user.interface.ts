  //create interface 
 export interface IUser {
    id:string,
    email:string,
    role:'student',
    password:string,
    name:{
        firsName:string,
        lastName:string
    }
    dateOfBirth ?:string,
    gender: "male"|"female",
    contactNo:string,
    emergencyAddress:string

}