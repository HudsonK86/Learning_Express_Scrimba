import { startups } from "../data/data.js"

export const getDataByPathParams = (req, res) => {
    const { field, term } = req.params
    const allowedFields = ["industry", "country", "continent"]

    if (!allowedFields.includes(field)) {
        return res.status(400).json({ message: "Invalid field" })
    }

    const filteredStartups = startups.filter(startup => startup[field].toLowerCase() === term.toLowerCase())

    res.json(filteredStartups)
}