import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    if (mongoose?.connection?.readyState === 1) {
      if ((process?.env?.MONGODB_URI !== mongoose?.connection?._connectionString)) {
        await mongoose?.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          serverSelectionTimeoutMS: 60000 // 30 seconds
        });
      }
      // console.log('Already Connected to MongoDB',mongoose.connection?._connectionString);
    } else {
      console.log('Not connected to MongoDB, trying to connect');
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 60000 // 30 seconds
      });
      console.log("Connected to MONGODB");
    }
    // await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    // console.log("Erro connecting to database: ", error);
  }
};
export default connectMongoDB