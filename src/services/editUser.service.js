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
  
  return {    name: users[userIndex].name,    email: users[userIndex].email,    uuid: users[userIndex].uuid,    updatedOn: users[userIndex].updatedOn,    createdOn: users[userIndex].createdOn,    isAdm: users[userIndex].isAdm,    password: users[userIndex].password,  }}

export default editUserService
