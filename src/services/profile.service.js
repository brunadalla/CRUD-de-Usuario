import jwt from "jsonwebtoken"

import users from "../database"

const profileService = (token) => {
  const decodedToken = jwt.decode(token, { complete: true })
  const userId = decodedToken.payload.uuid

  const user = users.find((user) => user.uuid === userId)
  const { uuid, name, email, isAdm, createdOn, updatedOn } = user

  const newUser = {
    uuid, 
    name, 
    email, 
    isAdm, 
    createdOn, 
    updatedOn
  }

  return newUser
}

export default profileService
