import express from "express"
import cors from "cors"
//import routes here ex 
//import restaurants from "./api/restaurants.route.js"

const app = express()

app.use(cors())
app.use(express.json())

//api here
//app.use("/api/v1/restaurants", restaurants)

app.use("*", (req, res) => res.status(404).json({ error: "page not found"}))

export default app