import '../styles/TaskFactory.sass'
import { useState } from 'react'

const TaskFactory = ({ addTask }) => {
  const [task, setTask] = useState('')

  const handleAddTask = () => {
    addTask(task) // add new task to list
    setTask('') // clear input value
  }

  return (
    <div className="task-factory">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default TaskFactory
