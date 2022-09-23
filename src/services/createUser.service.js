import users from "../database"
import { v4 as uuidv4 } from "uuid"

const createUserService = (name, email) => {
  const newUser = {
    id: uuidv4(),
    name,
    email,
  }

  users.push(newUser)

  return newUser
}

export default createUserService
