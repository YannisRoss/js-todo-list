
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
            let taskElement = document.createElement('li')
                taskElement.innerHTML = `${tasksArray[i].name}`
                tasksList.appendChild(taskElement)
                taskElement.task = tasksArray[i]
                taskElement.isExpanded = false;

                taskElement.addEventListener('click', function() { toggleExpandedView(this,taskElement.isExpanded) })
                
                i++

        }
    }
}
 
function toggleExpandedView(element,expandedStatus){
    
    if (expandedStatus) {
        element.style.removeProperty('height');
        element.innerHTML = element.task.name

       element.isExpanded = false

    } 
    else {
        element.style.height = '50vh'
        let expandedTaskView = document.createElement('article')
            element.appendChild(expandedTaskView)
            
        let taskDescription = document.createElement('input')
            taskDescription.setAttribute('type','text') 
            taskDescription.defaultValue = element.task.name
            expandedTaskView.appendChild(taskDescription) 

        element.isExpanded = true
    }



}


