import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import "dotenv/config"
import router from './src/routers/intro.js'
const app = express()
app.use(cors())
app.use(express.json())
app.use("/",router)
const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
const PORT=process.env.PORT


mongoose.connect(url).then(()=>console.log("conneted")).catch((error)=>console.log(error))
app.listen(PORT, () => {
  console.log(`Example app listening on port `)
})