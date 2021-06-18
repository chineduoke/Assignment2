import mongoose, { PassportLocalSchema } from 'mongoose';
const Schema = mongoose.Schema; // Schema alias
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
({
    username: String,
    password: String,
    
},
{
    collection: "details"
});

UserSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("User", UserSchema as PassportLocalSchema);

declare global
{
    export type UserDocument = mongoose.Document &
    {
        _id: String,
        username: String,
        password: String,
    }
}
export default Model; 