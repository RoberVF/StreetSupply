import { Schema, model, Document } from "mongoose";
const schema= new Schema({
    name: String,
    price: Number,
    team: String,
    liga: String,
    year: Number,
    imagePath: String,
    imagePath2: String,
    imagePath3: String
})
interface IData extends Document{
    name: string,
    price: number,
    team: string,
    liga: string,
    year: number,
    imagePath: string,
    imagePath2: string,
    imagePath3: string
}
export default model<IData>("Data", schema)