// Get the necessary elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add event listener to the add task button
addTaskButton.addEventListener('click', function() {
  // Get the task input value
  const taskText = taskInput.value;

  if (taskText.trim() !== '') {
    // Create a new list item
    const listItem = document.createElement('li');

    // Create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Append the checkbox and task span to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the task input
    taskInput.value = '';
  }
});

// Add event listener to the task list
taskList.addEventListener('click', function(event) {
  // Check if the clicked element is a checkbox
  if (event.target.type === 'checkbox') {
    // Get the parent list item
    const listItem = event.target.parentNode;

    // Toggle the completed class
    listItem.classList.toggle('completed');
}
});