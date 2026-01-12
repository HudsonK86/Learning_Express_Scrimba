import { startups } from "../data/data.js"

export const getStartupById = (req, res) => {
    const { id } = req.params
    const startupId = parseInt(id, 10)

    if (isNaN(startupId)) {
        return res.status(400).json({ message: "Invalid ID. ID must be a number." })
    }

    const startup = startups.find((s) => s.id === startupId)

    if (!startup) {
        return res.status(404).json({ message: "Startup not found" })
    }

    res.json(startup)
}
