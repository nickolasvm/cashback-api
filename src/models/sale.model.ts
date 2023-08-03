import { Schema, Document } from 'mongoose';

export interface ISale extends Document {
	productCode: string;
	value: number;
	date: Date;
	status: string;
}

const saleSchema = new Schema<ISale>({
	productCode: { type: String, required: true },
	value: { type: Number, required: true },
	date: { type: Date, default: Date.now, required: true },
	status: { type: String, required: true },
});

export default saleSchema;