const asyncWrappper = require("../middleware/async")
const Task = require("../models/Task")

const getAllTasks = asyncWrappper(async (req, res) => {
          const tasks = await Task.find({});
          res.status(200).json({tasks})
})
const createTask = asyncWrappper(async(req, res) => {
          const task = await Task.create(req.body)
          res.status(201).json({task})
})
const getTask = asyncWrappper( async (req, res) => {
          const taskId = req.params.id;
          const task = await Task.findOne({ _id : taskId});
          if(!task) {
               return res.status(404).json({msg : `No task found with id ${taskId}`})
          }
          res.status(200).json({task})
  
})
const updateTask = asyncWrappper(async (req, res) => {
    
          const taskId = req.params.id;
          const task = await Task.findOneAndUpdate({_id : taskId}, req.body, {
               new : true,
               runValidators : true
          })
          if(!task) {
               return res.status(404).json({msg : `No task found with id ${taskId}`})
          }
          res.status(201).json({task})
    
})
const deleteTask = asyncWrappper(async (req, res) => {
          const taskId = req.params.id;
          const task = await Task.findOneAndDelete({ _id : taskId});
          if(!task) {
               return res.status(404).json({msg : `No task found with id ${taskId}`})
          }
          res.status(200).json({task})
})

module.exports = {
     getAllTasks,
     createTask,
     getTask,
     updateTask,
     deleteTask
}