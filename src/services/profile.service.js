import jwt from "jsonwebtoken"

import users from "../database"

const profileService = (token) => {
  const decodedToken = jwt.decode(token, { complete: true })
  const userId = decodedToken.payload.uuid

  const user = users.find((user) => user.uuid === userId)
  delete user.password

  return user
}

export default profileService
