import users from "../database";
import { v4 as uuidv4 } from "uuid";

const createUserService = (email, name) => {
  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    throw new Error("This email address is already being used");
  }

  const newUser = {
    id: uuidv4(),
    name,
    email,
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
