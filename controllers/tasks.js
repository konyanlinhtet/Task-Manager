
const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
     try {
          const tasks = await Task.find({});
          res.status(200).json({tasks})
     } catch (error) {
          res.status(500).json({msg : error})
     }
     res.end("get all tasks")
}
const createTask = async(req, res) => {
     try {
          const task = await Task.create(req.body)
          res.status(201).json({task})
     } catch (error) {
          res.status(500).json({msg : error})
     }
}
const getTask = async (req, res) => {
     try {
          const taskId = req.params.id;
          const task = await Task.findOne({ _id : taskId});
          if(!task) {
               return res.status(404).json({msg : `No task found with id ${taskId}`})
          }
          res.status(200).json({task})
     } catch (error) {
          res.status(500).json({msg : error})
     }
}
const updateTask = (req, res) => {
     const {id} = req.params;
     console.log(id)
     res.end("update task")
}
const deleteTask = async (req, res) => {

     try {
          const taskId = req.params.id;
          const task = await Task.findOneAndDelete({ _id : taskId});
          if(!task) {
               return res.status(404).json({msg : `No task found with id ${taskId}`})
          }
          res.status(200).json({task : null, status : "Success"})
     } catch (error) {
          res.status(500).json({msg : error})
     }
}

module.exports = {
     getAllTasks,
     createTask,
     getTask,
     updateTask,
     deleteTask
}