import * as bcrypt from "bcryptjs"
import { v4 as uuidv4 } from "uuid"

import users from "../database"

const createUserService = async (name, email, password, isAdm) => {
  const date = new Date()
  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = {
    id: uuidv4(),
    name,
    email,
    isAdm,
    createdOn: date,
    updatedOn: date,
  }

  users.push({ ...newUser, password: hashedPassword })

  return newUser
}

export default createUserService
