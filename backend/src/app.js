import cors from "cors"
import express from "express"


const app=express()

app.use(cors({
    origin:"http://localhost:5173" || process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({
    limit:"10kb"
}))
app.use(express.urlencoded({extended:true,limit:"10kb"}))
import userRouter from './routes/rule.route.js'
app.use("/api",userRouter)
export{app}