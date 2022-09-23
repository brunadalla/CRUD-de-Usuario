import profileService from "../services/profile.service"

const profileController = (request, response) => {
  let token = request.headers.authorization
  token = token.split(" ")[1]
  
  const user = profileService(token)

  return response.status(200).json(user)
}

export default profileController
