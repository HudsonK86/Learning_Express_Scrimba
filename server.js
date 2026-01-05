import express from "express"
import { startups } from "./data/data.js"

const PORT = 8000
const app = express()

app.get("/api", (req, res) => {
    let filteredStartups = startups

    const { country, industry, continent, is_seeking_funding, has_mvp } = req.query

    if (country) {
        filteredStartups = filteredStartups.filter(startup => startup.country.toLowerCase() === country.toLowerCase())
    }

    if (industry) {
        filteredStartups = filteredStartups.filter(startup => startup.industry.toLowerCase() === industry.toLowerCase())
    }
    
    if (continent) {
        filteredStartups = filteredStartups.filter(startup => startup.continent.toLowerCase() === continent.toLowerCase())
    }
    
    if (is_seeking_funding) {
        filteredStartups = filteredStartups.filter(startup => startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase()))
    }

    if (has_mvp) {
        filteredStartups = filteredStartups.filter(startup => startup.has_mvp === JSON.parse(has_mvp.toLowerCase()))
    }
    
    res.json(filteredStartups)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))