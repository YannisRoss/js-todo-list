
import { tasksArray, newTask } from "./task-creation";




    
let parent = document.getElementById('container')

let newTaskButton = document.createElement('button')

let tasksDiv = document.createElement('div')

let tasksList = document.createElement('ul')

export function initialBuild() {

        newTaskButton.innerHTML = 'Create a new task'
        newTaskButton.setAttribute('id', 'new-task-button')

        newTaskButton.addEventListener('click', function() {newTask(prompt("What is the task's name?"))})
        parent.appendChild(newTaskButton)

        parent.appendChild(tasksDiv)

        tasksDiv.setAttribute('id', 'tasks-div')
        



    updateTasksDiv()
    

    tasksDiv.appendChild(tasksList)
    

}

export function updateTasksDiv() {
    tasksList.innerHTML = ''
    if (tasksArray.length == 0) {
        tasksList.innerHTML = 'Nothing on your to-do list yet'
    }
    else {
        let i = 0
        while (i < tasksArray.length) {
            let taskElement = document.createElement('div')
                taskElement.innerHTML = `${tasksArray[i].name}`
                tasksList.appendChild(taskElement)
                taskElement.task = tasksArray[i]
                taskElement.isExpanded = false;
                taskElement.setAttribute('class', 'task-element')

                taskElement.addEventListener('click', function() { expandView(taskElement) })
                
                i++

        }
    }
}
 
function expandView(taskElement){
    if (!taskElement.isExpanded) {
        taskElement.style.height = '50vh'
        let expandedTaskView = document.createElement('article')
        taskElement.appendChild(expandedTaskView)

        let taskDescriptionField = document.createElement('input')
            taskDescriptionField.setAttribute('type','text') 
            taskDescriptionField.defaultValue = taskElement.task.description
            expandedTaskView.appendChild(taskDescriptionField) 

            let descriptionUpdateButton = document.createElement('button')
                descriptionUpdateButton.innerHTML = 'Update description'
                descriptionUpdateButton.addEventListener('click', function() { updateTaskDescription(taskElement.task, taskDescriptionField) })
                expandedTaskView.appendChild(descriptionUpdateButton)
            taskElement.isExpanded = true

        
        let dueDateField = document.createElement('p')
            //dueDateField.setAttribute('type','date')
            dueDateField.innerHTML = taskElement.task.dueDate
            expandedTaskView.appendChild(dueDateField) 
        //dueDate, priority, notes
        let hideButton = document.createElement('button')
            hideButton.innerHTML = 'hide'
            hideButton.setAttribute('class', 'hide-button')
            expandedTaskView.appendChild(hideButton)
            hideButton.setAttribute('onclick',"event.stopPropagation()")
            hideButton.addEventListener('click', function() { minimizeView(taskElement, expandedTaskView) })
    } 
}

function minimizeView(taskElement, expandedTaskView) {

    if (taskElement.isExpanded) {
        taskElement.style.height = ''
        expandedTaskView.innerHTML = ''

        taskElement.isExpanded = false
    }
}


function updateTaskDescription(task, descriptionField) {

    console.log(descriptionField.value)

    task.description = descriptionField.value

}