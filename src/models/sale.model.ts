import { Schema, Document, model } from 'mongoose';

interface ISale extends Document {
	productCode: string,
	value: number;
	date: Date;
	status: string;
}

const saleSchema = new Schema<ISale>({
	productCode: { type: String, required: true },
	value: { type: Number, required: true },
	date: { type: Date, required: true },
	status: { type: String, required: true },
});

const saleModel = model<ISale>('Sale', saleSchema);

export default saleModel;