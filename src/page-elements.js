
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
        //let expandedTask = document.createElement('article')
        //    expandedTask.setAttribute('class', 'expanded-task')
        //taskElement.appendChild(expandedTask)

        buildDescription(taskElement)

            
        taskElement.isExpanded = true

        let dueDateField = document.createElement('p')
            //dueDateField.setAttribute('type','date')
            dueDateField.innerHTML = taskElement.task.dueDate
            taskElement.appendChild(dueDateField) 
        //dueDate, priority, notes
        
        let priorityDropdown = document.createElement('select')
            let highPriority = document.createElement('option')
                highPriority.value = 'High'
                highPriority.innerHTML = 'High'
                priorityDropdown.appendChild(highPriority)
                let lowPriority = document.createElement('option')
                priorityDropdown.appendChild(lowPriority)
                lowPriority.value = 'Low'
                lowPriority.innerHTML = 'Low'

                taskElement.appendChild(priorityDropdown)


        let hideButton = document.createElement('button')
            hideButton.innerHTML = 'hide'
            hideButton.setAttribute('class', 'hide-button')
            taskElement.appendChild(hideButton)
            hideButton.setAttribute('onclick',"event.stopPropagation()")
            hideButton.addEventListener('click', function() { minimizeView(taskElement) })

    } 
}

function minimizeView(taskElement) {

    if (taskElement.isExpanded) {
        taskElement.style.height = ''
        taskElement.innerHTML = taskElement.task.name

        taskElement.isExpanded = false
    }
}

function buildDescription(taskElement){


    let taskDescriptionDiv = document.createElement('div')
    taskDescriptionDiv.setAttribute('id','description-div') 
    taskDescriptionDiv.innerHTML = taskElement.task.description
    taskDescriptionDiv.addEventListener('click', function(){clickTaskDescription(taskDescriptionDiv, taskElement)})
    taskElement.appendChild(taskDescriptionDiv) 



   
    taskElement.isExpanded = true

}


function clickTaskDescription(taskDescriptionDiv, taskElement){

    console.log('task description clicked')
    let clickedTaskDescription = document.createElement('div')
        clickedTaskDescription.setAttribute('id', 'clicked-task-description')

        let taskDescriptionField = document.createElement('input')
        taskDescriptionField.setAttribute('type','text') 
        taskDescriptionField.defaultValue = taskElement.task.description
        //expandedTaskView.appendChild(taskDescriptionField) 
        console.log(1)
        //before click, it is regular text. on click, it becomes a text field 
        console.log(12)

        let descriptionUpdateButton = document.createElement('button')
        descriptionUpdateButton.innerHTML = 'Update description'
        descriptionUpdateButton.addEventListener('click', function() { updateTaskDescription(taskElement, taskDescriptionDiv, taskDescriptionField) })
        
        clickedTaskDescription.appendChild(taskDescriptionField)
        clickedTaskDescription.appendChild(descriptionUpdateButton)
        console.log(13)
        taskDescriptionDiv.replaceWith(clickedTaskDescription)

}

function updateTaskDescription(taskElement, taskDescriptionDiv, taskDescriptionField) {

    console.log('update description clicked: ' + taskDescriptionField.value)

    console.log(taskDescriptionDiv.innerHTML)

    taskElement.task.description = taskDescriptionField.value
    console.log(taskElement.task.description)
    document.getElementsByClassName('clicked-task-description').innerHTML = ''

    minimizeView(taskElement)
    console.log('rebuilding task desc')
    updateTasksDiv()
}