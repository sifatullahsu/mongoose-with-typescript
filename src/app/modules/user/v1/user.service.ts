import { iUser } from "./user.interface";
import User from "./user.model";

export const createUserDB = async (data: iUser): Promise<iUser> => {
  const user = new User(data);
  await user.save();

  return user;
}

export const getUsersDB = async (): Promise<iUser[]> => {
  const users = await User.find({});

  return users;
}

export const getUserDB = async (id: string): Promise<iUser | null> => {
  const user = await User.findById(id);

  return user;
}

export const updateUserDB = async (id: string, data: iUser): Promise<object> => {
  const query = { _id: id }
  const user = await User.updateOne(query, { $set: data });

  return user;
}

export const deleteUserDB = async (id: string): Promise<object> => {
  const query = { _id: id }
  const user = await User.deleteOne(query);

  return user;
}