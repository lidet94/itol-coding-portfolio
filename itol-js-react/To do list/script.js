const task = document.getElementById("inputField");
const button = document.getElementById("addButton");


button.addEventListener("click", function () {

    let input = task.value.trim()

    if (input == "") {
        return alert("Oops! Looks like the field is empty. Add a task to get started.")
    }
    if (input == task.value) {
        const list = document.createElement("li")
        list.classList.add("listed-items")

        list.textContent = input
        list.style.color = "green"

        const ulist = document.querySelector("ul")
        ulist.appendChild(list)
        task.value = ""

        const completedButton = document.createElement("button");
        completedButton.classList.add("completed-button")
        completedButton.innerHTML = "Completed"
        list.appendChild(completedButton)

        completedButton.addEventListener("click", function () {
            list.style.textDecoration = "line-through"
        })

        const removeButton = document.createElement("button")
        removeButton.classList.add("remove-button")
        removeButton.innerHTML = "Remove"
        list.appendChild(removeButton)

        removeButton.addEventListener("click", function () {
            list.remove("li")
        })

    }
})



