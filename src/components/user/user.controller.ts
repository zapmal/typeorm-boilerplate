import { Response } from 'express';
import { 
  getSingleUser,
  getAllUsers,
  createUser,
  deleteSingleUser,
} from './user.service';

const getUser = async (userID: number, response: Response) => {
  const user = await getSingleUser(userID);

  if (!user) {
    response.status(404);
    return { message: 'User not found.' };
  }

  return user;
};

const getUsers = async (response: Response) => {
  const users = await getAllUsers();

  if (!users) {
    response.status(404);
    return { message: 'No users to display.' };
  }

  return users;
};

const postUser = async (user: Object) => {
  const newUser = await createUser(user);

  return newUser;
};

const deleteUser = async (userID: number, response: Response) => {
  const userExists = await getSingleUser(userID);

  if (!userExists) {
    response.status(404);
    return { message: 'User not found.'};
  }

  await deleteSingleUser(userID);

  return { message: 'User deleted.' };
};

export { 
  getUser,
  getUsers,
  postUser, 
  deleteUser
};
