import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for the Mongoose Schema

const ContactSchema = new Schema
({
    ContactName: String,
    ContactNumber: String,
    EmailAddress: String,
    
},
{
    collection: "contacts"
});

const Model = mongoose.model("Contact", ContactSchema);
export default Model; 