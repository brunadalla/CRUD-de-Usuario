import jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs"

import users from "../database"

const loginService = (email, password) => {
  const user = users.find((user) => user.email === email)

  if (!user) {
    throw new Error("Invalid email or password")
  }

  const passwordMatch = bcrypt.compareSync(password, user.password)

  if (!passwordMatch) {
    throw new Error("Invalid email or password")
  }

  const token = jwt.sign({ email: email, isAdm: user.isAdm, uuid: user.uuid }, "SECRET_KEY", { expiresIn: "24h" })

  return token
}

export default loginService
