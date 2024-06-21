const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("../db/conn")  


const Admin = require("../models/admin");
const User = require("../models/user");
const Dealership = require("../models/dealership");
const Deal = require("../models/deal");
const Car = require("../models/car");
const SoldVehicle = require("../models/soldVehicle");

const app = express(); 
const port = process.env.PORT || 3000; 

// Middleware
app.use(bodyParser.json());

// Database Connection
connectDB();

//-----------------Admin Routes------------------   
// Create Admin
app.post("/admin", async (req, res) => {
    try {
        const admin = new Admin(req.body);
        const createdAdmin = await admin.save();
        res.status(201).json(createdAdmin);
    } catch (error) {
        console.error("Error creating admin:", error);
        res.status(400).json({ message: "Failed to create admin", error: error.message });
    }
});

// Get All Admins
app.get("/admin", async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (error) {
        console.error("Error fetching admins:", error);
        res.status(500).json({ message: "Failed to fetch admins", error: error.message });
    }
});

//-------------------User Routes----------------

// Create User
app.post("/user", async (req, res) => {
    try {
        const user = new User(req.body);
        const createdUser = await user.save();
        res.status(201).json(createdUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(400).json({ message: "Failed to create user", error: error.message });
    }
});

// Get All Users
app.get("/user", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Failed to fetch users", error: error.message });
    }
});

//----------------Car Routes---------

// Create Car
app.post("/car", async (req, res) => {
    try {
        const car = new Car(req.body);
        const createdCar = await car.save();
        res.status(201).json(createdCar);
    } catch (error) {
        console.error("Error creating car:", error);
        res.status(400).json({ message: "Failed to create car", error: error.message });
    }
});

// Get All Cars
app.get("/car", async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ message: "Failed to fetch cars", error: error.message });
    }
});

//-----------------Deal Routes--------
// Create Deal
app.post("/deal", async (req, res) => {
    try {
        const deal = new Deal(req.body);
        const createdDeal = await deal.save();
        res.status(201).json(createdDeal);
    } catch (error) {
        console.error("Error creating deal:", error);
        res.status(400).json({ message: "Failed to create deal", error: error.message });
    }
});

// Get All Deals
app.get("/deal", async (req, res) => {
    try {
        const deals = await Deal.find();
        res.json(deals);
    } catch (error) {
        console.error("Error fetching deals:", error);
        res.status(500).json({ message: "Failed to fetch deals", error: error.message });
    }
});

//----------Dealership Routes---------

// Create Dealership
app.post("/dealership", async (req, res) => {
    try {
        const dealership = new Dealership(req.body);
        const createdDealership = await dealership.save();
        res.status(201).json(createdDealership);
    } catch (error) {
        console.error("Error creating dealership:", error);
        res.status(400).json({ message: "Failed to create dealership", error: error.message });
    }
});

// Get All Dealerships
app.get("/dealership", async (req, res) => {
    try {
        const dealerships = await Dealership.find();
        res.json(dealerships);
    } catch (error) {
        console.error("Error fetching dealerships:", error);
        res.status(500).json({ message: "Failed to fetch dealerships", error: error.message });
    }
});

//---------------SoldVehicle Routes-------

// Create Sold Vehicle
app.post("/soldvehicle", async (req, res) => {
    try {
        const soldVehicle = new SoldVehicle(req.body);
        const createdSoldVehicle = await soldVehicle.save();
        res.status(201).json(createdSoldVehicle);
    } catch (error) {
        console.error("Error creating sold vehicle:", error);
        res.status(400).json({ message: "Failed to create sold vehicle", error: error.message });
    }
});

// Get All Sold Vehicles
app.get("/soldvehicle", async (req, res) => {
    try {
        const soldVehicles = await SoldVehicle.find();
        res.json(soldVehicles);
    } catch (error) {
        console.error("Error fetching sold vehicles:", error);
        res.status(500).json({ message: "Failed to fetch sold vehicles", error: error.message });
    }
});

//Server Listen
app.listen(port , ()=>{
    console.log(`Server is unning on port ${port}`); 
});