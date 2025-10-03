// Get DOM elements for task input, time input and button
const taskInput = document.getElementById("task");
const timeInput = document.getElementById("time");
const button = document.getElementById("button");

//Initialise total time counter
let totalTimes = 0

// When button clicked, run this function
button.addEventListener("click", function () {

    // Get user input values
    let taskName = taskInput.value;
    let timeMinute = parseFloat(timeInput.value);

    // Check how long the task is and give it the right class 
    let categoryClass = "";
    if (timeMinute <= 15) {
        categoryClass = "quickCategory";
    } else if (timeMinute <= 45) {
        categoryClass = "moderateCategory";
    } else {
        categoryClass = "longCategory";
    }

    // Create and style a new list item for the task
    const store = document.createElement("li")
    store.classList.add(categoryClass)
    store.textContent = `${taskName}, ${timeMinute} minutes`

    // Append the task to the list
    document.getElementById("list").appendChild(store)

    // Update and display the total minutes
    totalTimes += timeMinute;
    document.getElementById("displayTotalMinutes");
    displayTotalMinutes.textContent = `Total Minutes: ${totalTimes}`;

})