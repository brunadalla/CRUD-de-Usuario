import editUserService from "../services/editUser.service"

const editUserController = (request, response) => {
  try {
    const { id } = request.params
    const body = request.body

    let token = request.headers.authorization
    token = token.split(" ")[1]

    const editedUser = editUserService(token, id, body)

    return response.status(200).json(editedUser)
  } catch (error) {
    return response.status(403).json({ message: error.message })
  }
}

export default editUserController
