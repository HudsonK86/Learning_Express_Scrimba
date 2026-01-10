import express from "express"
import { apiRouter } from "./routes/apiRoutes.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 8000
const app = express()

app.use(cors())

app.use("/api", apiRouter)

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
