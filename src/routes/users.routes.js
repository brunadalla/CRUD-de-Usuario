import { Router } from "express"

import createUserController from "../controllers/createUser.controller"
import listUserController from "../controllers/listUsers.controller"

const router = Router()

router.post("", createUserController)
router.get("", listUserController)

export default router