import loginService from "../services/login.service"

const loginController = (request, response) => {
  try {
    const { email, password } = request.body

    const userLogin = loginService(email, password)

    return response.status(200).json({token: userLogin})
  } catch (error) {
    return response.status(401).json({ message: error.message })
  }
}

export default loginController
