import createUserService from "../services/createUser.service";

const createUserController = (request, response) => {
  try {
    const { name, email } = request.body;
    const user = createUserService(name, email);

    return response.json(user);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default createUserController;
