import jwt from "jsonwebtoken" 

const verifyAdmMiddleware = (request, response, next) => {
    let token = request.headers.authorization
  
    token = token.split(" ")[1]

    const decodedToken = jwt.decode(token, {complete: true})
    const isAdm = decodedToken.payload.isAdm
  
    if(!isAdm) {
        return response
        .status(403)
        .json({ message: "Unauthorized Access" })
    }
  
    next()
  }
  
  export default verifyAdmMiddleware