import { Schema, Document, model } from 'mongoose';
import saleSchema, { ISale } from './sale.model';

interface IUser extends Document {
	username: string;
	cpf: string;
	email: string;
	password: string;
	sales: ISale[];
}

const userSchema = new Schema<IUser>({
	username: { type: String, required: true },
	cpf: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	sales: [{ type: saleSchema, ref: 'Sale' }],
});

const userModel = model<IUser>('User', userSchema);

export default userModel;