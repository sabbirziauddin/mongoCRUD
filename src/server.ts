
import mongoose from 'mongoose'
import app from './app';





const port:number = 5000



//database connection 

async function bootstrap() {
  await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
  try {
    console.log(`database connection successfull`);
    app.listen(port, () => {
        console.log(`server is  listening on port ${port}`)
      })
  } catch (error) {
    console.log(error)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
bootstrap();


