import '../styles/TasksList.sass'
import deleteIcon from '../assets/delete.svg'
import { filterTaskByActiveTab } from '../utils/'

const TasksList = ({
  tasks,
  deleteTask,
  toggleTaskStatus,
  activeTab,
}) => {
  return (
    <div className="tasks-list">
      {tasks
        .filter((task) => filterTaskByActiveTab(task, activeTab))
        .map((task) => (
          <div
            className={'task' + (task.isDone ? ' -done' : '')}
            key={task.id}
          >
            <div className="left-side">
              <input
                type="checkbox"
                onChange={() => toggleTaskStatus(task.id)}
                defaultChecked={task.isDone}
              />
              <span>{task.text}</span>
            </div>
            <img
              src={deleteIcon}
              alt="delete"
              onClick={() => deleteTask(task.id)}
            />
          </div>
        ))}
    </div>
  )
}

export default TasksList
