import express from "express"
import { getAllData } from "../controllers/getAllData.js"
import { getDataByPathParams } from "../controllers/getDataByPathParams.js"
import { getStartupById } from "../controllers/getStartupById.js"

export const apiRouter = express.Router()

apiRouter.get("/", getAllData)

apiRouter.get("/:id(\\d+)", getStartupById)

apiRouter.get("/:field/:term", getDataByPathParams)
