// Start with an empty array to hold task times
let value = []

// This function asks the user to enter 3 task times and calculates the average
function calAverage(value) {
    let sum = 0;

    //Ask for 3 inputs using prompt
    for (let i = 0; i < 3; i++) {
        let input = prompt(`Enter task time ${i + 1} in minutes:`);
        
        // Convert the input to a number and add it to the array
        value.push(parseFloat(input))
        sum += value[i];

        // Returns the average
    } return sum / 3;
}
// Round the average number to 2 decimal places
const roundedNum = Math.round(calAverage(value) * 100) / 100;

// Finds the shortest and longest task
const minNum = Math.min(...value)
const maxNum = Math.max(...value)

// Print message on console
console.log(`Average task time: ${roundedNum} minutes. Shortest: ${minNum} mins. Longest: ${maxNum} mins`)