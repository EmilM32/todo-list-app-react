import '../styles/App.sass'
import Header from './Header'
import TaskFactory from './TaskFactory'
import TasksList from './TasksList'
import { useState } from 'react'
import { tabAvailable } from '../utils/constants'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [activeTab, setActiveTab] = useState(tabAvailable.ALL)

  const addTask = (newTaskText) => {
    if (newTaskText.length) {
      const newTask = {
        text: newTaskText,
        isDone: false,
        id: tasks.length + 1,
      }
      setTasks([newTask, ...tasks])
    }
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  const toggleTaskStatus = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone
      }
      return task
    })
    setTasks(newTasks)
  }

  const handleActiveTab = (activeTab) => setActiveTab(activeTab)

  return (
    <div className="app">
      <div className="container">
        <Header
          activeTab={activeTab}
          handleActiveTab={handleActiveTab}
        />
        <TaskFactory addTask={addTask} />
        <TasksList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskStatus={toggleTaskStatus}
          activeTab={activeTab}
        />
      </div>
    </div>
  )
}

export default App
