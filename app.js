const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
const errorHandler = require("./middleware/error-handler")
require("dotenv").config()//to hide database access 
const notFound = require("./middleware/not-found")
//middleware
app.use(express.static("./public"))//for reading public folder
app.use(express.json()) //for sending json


// routes 

app.use('/api/v1/tasks', tasks)
app.use(notFound)

//for handling error
app.use(errorHandler)

//connect database and server
const port =process.env.PORT|| 3000
const start = async () => {
     try {
          await connectDB(process.env.MONGO_URI)
          app.listen(port, console.log(`Server is listening on ${port} ...`))
     } catch (error) {
          console.log(err)
     }
}
start()
