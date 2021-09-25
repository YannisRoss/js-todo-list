
import { tasksArray, newTask } from "./task-creation";


let parent = document.getElementById('container')

let newTaskButton = document.createElement('button')

let tasksDiv = document.createElement('div')

let tasksList = document.createElement('ul')

export function initialBuild() {

        newTaskButton.innerHTML = 'Create a new task'
        newTaskButton.setAttribute('id', 'new-task-button')

        newTaskButton.addEventListener('click', function() {newTask(prompt("What is the task's name?"), 'no description', 'no dueDate', 'priority', 'notes')})
        parent.appendChild(newTaskButton)

        parent.appendChild(tasksDiv)

        tasksDiv.setAttribute('id', 'tasks-div')
        console.log(1)



    updateTasksDiv()
    console.log(2)

    tasksDiv.appendChild(tasksList)
    console.log(3)

}

export function updateTasksDiv() {
    tasksList.innerHTML = ''
    console.log(tasksArray)
    if (tasksArray.length == 0) {
        tasksDiv.innerHTML = 'Nothing on your to-do list yet'
    }
    else {
        let i = 0
        while (i < tasksArray.length) {
            let taskElement = document.createElement('li')
                taskElement.innerHTML = `${tasksArray[i].name}`
                tasksList.appendChild(taskElement)
                console.log(0)
                i++

        }
    }
}