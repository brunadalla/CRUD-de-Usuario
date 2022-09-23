import { Router } from "express"

import createUserController from "../controllers/createUser.controller"
import listUserController from "../controllers/listUsers.controller"

import verifyEmailAvailabilityMiddleware from "../middleware/verifyEmailAvailability.middleware"
import verifyAdmMiddleware from "../middleware/verifyAdm.middleware"
import verifyAuthTokenMiddleware from "../middleware/verifyAuthToken.middleware"
import profileController from "../controllers/profile.controller"

const router = Router()

router.post("", verifyEmailAvailabilityMiddleware, createUserController)
router.get("", verifyAuthTokenMiddleware, verifyAdmMiddleware, listUserController)

router.get("/profile", verifyAuthTokenMiddleware, profileController)

export default router
