const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_URL + process.env.Data_Base)
    .then(() => console.log('connected to database'))
    .catch(() => console.log("connection error"))

// schema for user registration

const userRegSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    contact: { type: Number },
    password: { type: String },
    token: { type: String }
},
    { timestamps: true }
)

const userRegModel = mongoose.model('userReg', userRegSchema)


// schema for vendor register

const vendorRegSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    contact: { type: Number },
    password: { type: String },
    token: { type: String }
},
    { timestamps: true }
)

const vendorRegModel = mongoose.model('vendorReg', userRegSchema)

//  schema for create events by vendor

const EventSchema = new mongoose.Schema({
    vendor_name:{type:String},
    email_id:{type:String},
    eventName:{ type: String },
    placeOfEvent:{ type: String },
    proposalType: { type: String },
    eventType: { type: String },
    budget: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    description: { type: String },
    food: { type: String },
    Events: { type: String },
    image: { type: Array},
    token:{type:String}
})

const eventModel=mongoose.model('event_data',EventSchema)

module.exports = { userRegModel, vendorRegModel,eventModel }
