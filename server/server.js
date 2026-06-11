import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000
const app = express()


app.use(express.json())
app.use(cors())

// 2. Database connection
await connectDB()

// 3. Routes
app.get('/', (req, res) => res.send("API Working"))
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter) 
// Add this temporarily at the bottom of server.js to test your environment configuration:
console.log("Your Loaded Clipdrop Key is:", process.env.CLIPDROP_API);
app.listen(PORT, () => console.log('Server running on port ' + PORT))