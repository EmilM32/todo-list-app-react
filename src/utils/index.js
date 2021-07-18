import { tabAvailable } from '../utils/constants'

export const filterTaskByActiveTab = (task, activeTab) => {
  if (task.isDone && activeTab === tabAvailable.COMPLETED) {
    return task
  } else if (!task.isDone && activeTab === tabAvailable.INCOMPLETE) {
    return task
  } else if (activeTab === tabAvailable.ALL) {
    return task
  }
}
