import '../styles/TaskFactory.sass'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const TaskFactory = ({ addTask }) => {
  const { t } = useTranslation('actions')
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
      <button onClick={handleAddTask}>{t('addTask')}</button>
    </div>
  )
}

export default TaskFactory
