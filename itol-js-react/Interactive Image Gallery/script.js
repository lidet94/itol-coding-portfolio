function addImage() {
    //Get the input field element
    const input = document.getElementById("image")

    //Check if the input has a value 
    if (input.value) {
        //Get the gallery container where the images will be displayed
        const displayImage = document.getElementById("displayImage")

        // Create a wrapper div to hold the image and its remove button
        const galleryItem = document.createElement("div")
        galleryItem.classList.add("galleryItem")

        // Create the image element and set its source to the input value
        const newImage = document.createElement("img")
        newImage.src = input.value

        // Create a "Remove" button for deleting the image block
        const removeButton = document.createElement("button")
        removeButton.textContent = "Remove"
        removeButton.classList.add("removeButton")

        // Add click event to the remove button to delete the entire gallery item
        removeButton.addEventListener("click", () => {
            displayImage.removeChild(galleryItem)
        })
        // Append the image and remove button to the gallery item container
        galleryItem.appendChild(newImage)
        galleryItem.appendChild(removeButton)

        // Append the gallery item to the main display container
        displayImage.appendChild(galleryItem)

        // Clear the input field after adding the image
        document.getElementById("image").value = ""
    } else {
        alert("Please enter an image URL")
    }
}
