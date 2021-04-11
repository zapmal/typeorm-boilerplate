import { getRepository } from 'typeorm';
import { User } from '../../entity/User';

const getSingleUser = async (userID: number) => {
  const user = await getRepository(User).findOne(userID);

  return user;
}; 

const getAllUsers = async () => {
  const users = await getRepository(User).find();

  return users;
};

const createUser = async (_user: Object) => {
  const userRepository = getRepository(User);
  const user = await userRepository.save(
    userRepository.create(_user)
  );

  return user;
};

const deleteSingleUser = async (userID: number) => {
  const deletedUser = getRepository(User).delete(userID);

  return deletedUser;
};

export {
  getSingleUser,
  getAllUsers,
  createUser,
  deleteSingleUser,
};
