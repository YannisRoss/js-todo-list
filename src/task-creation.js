import { updateTasksDiv } from "./page-elements"

export let tasksArray = JSON.parse(localStorage.getItem('tasks'))

if (tasksArray == null) {
    tasksArray = []
}

export function newTask(name, description = 'No description yet', dueDate = new Date(), priority = '', notes = '')  {

    console.log('new task pressed')
    let task = Object.create(newTask.proto)
    task.name = name
    task.description = description
    task.dueDate = dueDate
    task.priority = priority
    task.notes = notes
    task.done = false

    tasksArray.push(task)

    task.id = tasksArray.length

    localStorage.setItem("tasks", JSON.stringify(tasksArray));

    updateTasksDiv()
    return task
    
      }
       
        newTask.proto = {
       
            changeDoneStatus: function(){

                if (this.done) {
                    this.done = false
                }
                else {this.done = true}
            }
      }
