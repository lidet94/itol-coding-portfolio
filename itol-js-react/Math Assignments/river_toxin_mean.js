// These are the toxin levels from five different river samples
let value = [2.2, 4.5, 6.1, 1.3, 3.5]

// This function takes the array and calculates the average
function calculateMean(value) {
    let sum = 0;

// Loop through each number and add it to the sum
    for (let i = 0; i < value.length; i++) {
        sum += value[i];

// Divide the total by how many numbers there are
    } return sum / value.length;
}
// Call the function and store the result
const mean = calculateMean(value);

// Round the result to 2 decimal places
const roundedMean = Math.round(mean * 100) / 100;

// Create a message
let message = "Mean: " + roundedMean;

// Print the message
console.log(message)