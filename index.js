import express from 'express'
import postRouter from "./src/modules/posts/post.routes.js"
import connection from './DB/connectionDB.js'
import cors from "cors"
const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use(cors())
app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "welcome ya welcome"
    })
})
app.use("/posts", postRouter)
connection
app.use("*", (req, res, next) => {
    res.status(404).json({
        message: "page Not Found"
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))