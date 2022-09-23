import listUsersService from "../services/listUsers.service"

const listUserController = (request, response) => {
  const users = listUsersService()

  return response.json(users)
}

export default listUserController
