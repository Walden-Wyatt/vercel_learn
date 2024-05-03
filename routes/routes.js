

import e from "express";
import { defaultRoute, homeRoute, loginRoute } from "./controller.js";

const router = e.Router();


router.get("/", defaultRoute);
router.get("/home", homeRoute);
router.post("/login", loginRoute);


export default router;