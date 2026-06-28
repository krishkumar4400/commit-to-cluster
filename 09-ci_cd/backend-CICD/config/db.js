import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database connected successfully"));
        await mongoose.connect(
          process.env.MONGO_URI, {
            dbName: "mern_blog_application"
          }
        );
        
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;