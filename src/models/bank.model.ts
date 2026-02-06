import mongoose, { Document, Schema } from "mongoose";

export interface IBank extends Document {
    bankName: string;
    accountNumber: string;
    accountName: string;
}

const bankSchema = new Schema ({
    bankName: { type: String, required: true },
    accountName: { type: String, required: true },
    accountNumber: { type: String, required: true, unique: true },
})

export default mongoose.model<IBank>("Bank", bankSchema);