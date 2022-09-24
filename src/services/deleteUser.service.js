import jwt from "jsonwebtoken"

import users from "../database"

const deleteUserService = (token, id) => {
  const decodedToken = jwt.decode(token, { complete: true })

  const isAdm = decodedToken.payload.isAdm
  const userId = decodedToken.payload.id

  const userIndex = users.findIndex((user) => user.id === id)

  if (userId !== id && !isAdm) {
    throw new Error("Forbidden access")
  }

  users.splice(userIndex, 1)

  return { message: "User deleted with success" }
}

export default deleteUserService
