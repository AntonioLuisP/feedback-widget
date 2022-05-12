import { routes } from "./routes"
import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.get("/teste", (req, res) => {
  return res.json({ data: "eae" })
})
app.listen(3333, () => {
  console.log("HTTP SERVER RUNNING")
})
