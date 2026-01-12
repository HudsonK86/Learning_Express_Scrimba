import { startups } from "../data/data.js"

export const searchStartups = (req, res) => {
    const { q } = req.query

    if (!q || q.trim() === "") {
        return res.status(400).json({
            message: "Search query parameter 'q' is required",
        })
    }

    const searchTerm = q.toLowerCase().trim()
    const matchingStartups = startups.filter((startup) =>
        startup.name.toLowerCase().includes(searchTerm)
    )

    res.json({
        query: q,
        results: matchingStartups,
        count: matchingStartups.length,
    })
}
