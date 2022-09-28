import jwt from "jsonwebtoken"

import users from "../database"

const editUserService = (token, uuid, body) => {
  const decodedToken = jwt.decode(token, { complete: true })
  
  const isAdm = decodedToken.payload.isAdm
  const userId = decodedToken.payload.uuid

  const user = users.find((user) => user.uuid === uuid)
  const userIndex = users.findIndex((user) => user.uuid === uuid)

  if (userId !== uuid && !isAdm) {
    throw new Error("Unauthorized access")
  }

  const date = new Date()
  const editedUser = { ...body, isAdm: user.isAdm, updatedOn: date}

  users[userIndex] = { ...users[userIndex], ...editedUser }

  const newUser = {
    uuid: users[userIndex].uuid, 
    name: users[userIndex].name, 
    email: users[userIndex].email, 
    isAdm: users[userIndex].isAdm, 
    createdOn: users[userIndex].createdOn, 
    updatedOn: users[userIndex].updatedOn
  }
  
  return newUser
}

export default editUserService
