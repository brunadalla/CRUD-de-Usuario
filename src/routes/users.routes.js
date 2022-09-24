import { Router } from "express"

import verifyEmailAvailabilityMiddleware from "../middleware/verifyEmailAvailability.middleware"
import verifyAdmMiddleware from "../middleware/verifyAdm.middleware"
import verifyAuthTokenMiddleware from "../middleware/verifyAuthToken.middleware"

import createUserController from "../controllers/createUser.controller"
import listUserController from "../controllers/listUsers.controller"
import profileController from "../controllers/profile.controller"
import editUserController from "../controllers/editUser.controller"
import deleteUserController from "../controllers/deleteUser.controller"

const router = Router()

router.post("", verifyEmailAvailabilityMiddleware, createUserController)
router.get("", verifyAuthTokenMiddleware, verifyAdmMiddleware, listUserController)

router.get("/profile", verifyAuthTokenMiddleware, profileController)
router.patch("/:id", verifyAuthTokenMiddleware, editUserController)
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController)

export default router
