import deleteUserService from "../services/deleteUser.service"

const deleteUserController = (request, response) => {
  try {
    const { id } = request.params

    let token = request.headers.authorization
    token = token.split(" ")[1]

    const deletedUser = deleteUserService(token, id)

    return response.status(200).json(deletedUser)
  } catch (error) {
    return response.status(403).json({ message: error.message })
  }
}

export default deleteUserController
