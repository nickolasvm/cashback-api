import { Schema, Document, model } from 'mongoose';

interface IUser extends Document {
	username: string;
	cpf: string;
	email: string;
	password: string;
}

const userSchema = new Schema<IUser>({
	username: { type: String, required: true },
	cpf: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const userModel = model<IUser>('User', userSchema);

export default userModel;