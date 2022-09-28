import deleteUserService from "../services/deleteUser.service"

const deleteUserController = (request, response) => {
  try {
    const { uuid } = request.params

    let token = request.headers.authorization
    token = token.split(" ")[1]

    const deletedUser = deleteUserService(token, uuid)

    return response.status(200).json(deletedUser)
  } catch (error) {
    return response.status(401).json({ message: error.message })
  }
}

export default deleteUserController
