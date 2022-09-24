import jwt from "jsonwebtoken"

import users from "../database"

const profileService = (token) => {
  const decodedToken = jwt.decode(token, { complete: true })
  const userId = decodedToken.payload.id

  const user = users.find((user) => user.id === userId)

  return user
}

export default profileService
