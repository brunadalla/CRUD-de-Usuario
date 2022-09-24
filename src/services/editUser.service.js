import jwt from "jsonwebtoken"

import users from "../database"

const editUserService = (token, id, body) => {
  const decodedToken = jwt.decode(token, { complete: true })

  const isAdm = decodedToken.payload.isAdm
  const userId = decodedToken.payload.id

  const user = users.find((user) => user.id === id)
  const userIndex = users.findIndex((user) => user.id === id)

  if (userId !== id && !isAdm) {
    throw new Error("Forbidden access")
  }

  const date = new Date()
  const editedUser = { ...body, isAdm: user.isAdm, updatedOn: date }

  users[userIndex] = { ...users[userIndex], ...editedUser }

  return editedUser
}

export default editUserService
