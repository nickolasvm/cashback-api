import { Schema, model } from 'mongoose';

interface IUser {
	name: string;
	cpf: number;
	email: string;
	password: string;
}

const userSchema = new Schema<IUser>({
	name: { type: String, required: true },
	cpf: { type: Number, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const userModel = model<IUser>('User', userSchema);

export default userModel;