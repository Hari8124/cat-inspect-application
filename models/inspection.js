const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InspectionSchema = new Schema({
    truckSerialNumber: String,
    truckModel: String,
    inspectionId: { type: Number, unique: true },
    inspectorName: String,
    inspectorEmployeeId: String,
    dateTime: { type: Date, default: Date.now },
    location: String,
    geoCoordinates: String,
    serviceMeterHours: Number,
    inspectorSignature: String,
    customerName: String,
    catCustomerId: String,
    tires: {
        tirePressureLeftFront: Number,
        tirePressureRightFront: Number,
        tireConditionLeftFront: String,
        tireConditionRightFront: String,
        tirePressureLeftRear: Number,
        tirePressureRightRear: Number,
        tireConditionLeftRear: String,
        tireConditionRightRear: String,
        overallTireSummary: String,
        tireImages: [String]
    },
    battery: {
        batteryMake: String,
        batteryReplacementDate: Date,
        batteryVoltage: Number,
        batteryWaterLevel: String,
        batteryCondition: String,
        batteryLeakRust: Boolean,
        batteryOverallSummary: String,
        batteryImages: [String]
    },
    exterior: {
        rustDentDamage: Boolean,
        oilLeakSuspension: Boolean,
        overallSummary: String,
        exteriorImages: [String]
    },
    brakes: {
        brakeFluidLevel: String,
        brakeConditionFront: String,
        brakeConditionRear: String,
        emergencyBrake: String,
        brakeOverallSummary: String,
        brakeImages: [String]
    },
    engine: {
        rustDentDamage: Boolean,
        engineOilCondition: String,
        engineOilColor: String,
        brakeFluidCondition: String,
        brakeFluidColor: String,
        oilLeak: Boolean,
        overallSummary: String,
        engineImages: [String]
    },
    voiceOfCustomer: {
        feedback: String,
        customerImages: [String]
    }
});

module.exports = mongoose.model('Inspection', InspectionSchema, 'inspections');
