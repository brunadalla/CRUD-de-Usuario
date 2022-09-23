import { Router } from "express"

import createUserController from "../controllers/createUser.controller"
import listUserController from "../controllers/listUsers.controller"

import verifyEmailAvailabilityMiddleware from "../middleware/verifyEmailAvailability.middleware"

const router = Router()

router.post("", verifyEmailAvailabilityMiddleware, createUserController)
router.get("", listUserController)

export default router
