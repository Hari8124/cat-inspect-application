const express = require('express');
const router = express.Router();
const Inspection = require('../models/inspection');
const multer = require('multer');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Route to create a new inspection
router.post('/', upload.array('images', 12), async (req, res) => {
    const {
        truckSerialNumber, truckModel, inspectionId, inspectorName,
        inspectorEmployeeId, location, geoCoordinates, serviceMeterHours,
        inspectorSignature, customerName, catCustomerId, tires, battery,
        exterior, brakes, engine, voiceOfCustomer
    } = req.body;

    const images = req.files.map(file => file.path);

    try {
        const newInspection = new Inspection({
            truckSerialNumber, truckModel, inspectionId, inspectorName,
            inspectorEmployeeId, location, geoCoordinates, serviceMeterHours,
            inspectorSignature, customerName, catCustomerId, tires, battery,
            exterior, brakes, engine, voiceOfCustomer,
            images
        });

        const savedInspection = await newInspection.save();
        res.json(savedInspection);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to get all inspections
router.get('/', async (req, res) => {
    try {
        const inspections = await Inspection.find();
        res.json(inspections);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
