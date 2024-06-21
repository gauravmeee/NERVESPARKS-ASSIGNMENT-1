const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/car-deals-api", {
            //Options Deprecated
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            //useCreateIndex: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;


//If directly include the connection in "app.js" without using "conn.js"
/*
mongoose.connect("mongodb://localhost:27017/car-deals-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
});
*/