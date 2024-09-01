
function addTask() {
    const titleInput = document.getElementById('task-title');
    const descriptionInput = document.getElementById('task-description');
    const taskText = titleInput.value.trim();
    const taskDescription = descriptionInput.value.trim();
    const errorMessage = document.getElementById('error-message');

   
    errorMessage.textContent = '';

    if (taskText === '' || taskDescription === '') {
        errorMessage.textContent = 'Both title and description are required.';
        return;
    }

    const timestamp = new Date().toLocaleString();
    const task = createTaskElement(taskText, taskDescription, timestamp);
    document.getElementById('pending-tasks').appendChild(task);


    titleInput.value = '';
    descriptionInput.value = '';
}


function createTaskElement(taskText, taskDescription, timestamp) {
    const li = document.createElement('li');
    const titleSpan = document.createElement('span');
    const descriptionSpan = document.createElement('span');
    const dateSpan = document.createElement('span');
    const buttonContainer = document.createElement('div');
    const completeButton = document.createElement('button');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');


    
    titleSpan.textContent = `Title: ${taskText}`;
    descriptionSpan.textContent = `Description: ${taskDescription}`;
    dateSpan.textContent = `Added: ${timestamp}`;

  
    completeButton.textContent = 'Complete';
    editButton.textContent = 'Edit';
    deleteButton.textContent = 'Delete';


    titleSpan.classList.add('task-title');
    descriptionSpan.classList.add('task-description');
    dateSpan.classList.add('task-date');
    buttonContainer.classList.add('button-container');


    completeButton.onclick = () => completeTask(li);
    deleteButton.onclick = () => deleteTask(li);
    editButton.onclick = () => editTask(li, titleSpan, descriptionSpan);


    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);


    li.appendChild(titleSpan);
    li.appendChild(descriptionSpan);
    li.appendChild(dateSpan);
    li.appendChild(buttonContainer);

    return li;
}


function completeTask(taskElement) {
    const timestamp = new Date().toLocaleString();
    const dateSpan = document.createElement('span');
    dateSpan.textContent = `Completed: ${timestamp}`;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button-completed'); 
    deleteButton.onclick = () => deleteTask(taskElement);


    const [titleSpan, descriptionSpan] = taskElement.getElementsByTagName('span');
    taskElement.innerHTML = ''; 

   
    taskElement.appendChild(titleSpan); 
    taskElement.appendChild(descriptionSpan);
    taskElement.appendChild(dateSpan); 
    taskElement.appendChild(deleteButton); 

    taskElement.classList.add('completed');
    document.getElementById('completed-tasks').appendChild(taskElement); 
}



function deleteTask(taskElement) {
    taskElement.remove();
}


function editTask(taskElement, titleSpan, descriptionSpan) {
    const newTitle = prompt('Edit task title:', titleSpan.textContent.replace('Title: ', ''));
    const newDescription = prompt('Edit task description:', descriptionSpan.textContent.replace('Description: ', ''));
    if (newTitle !== null && newDescription !== null) {
        titleSpan.textContent = `Title: ${newTitle}`;
        descriptionSpan.textContent = `Description: ${newDescription}`;
    }
}
