
function calculator(operation) {

//Retrieve and convert the input values into floating-point numbers
    const input1 = parseFloat(document.getElementById("number1").value);
    const input2 = parseFloat(document.getElementById("number2").value);

//Store outcomes within this variable
    let result = "";

//Check if the input is not a number, display error message 
    if (isNaN(input1) || isNaN(input2)) {
        result = "Please enter a valid number";

// Use a switch statement to perform the selected operation and format the result
    } else {
        switch (operation) {
            case "add": result = `${input1} + ${input2} = £${input1 + input2}`;
                break;
            case "multiply": result = `${input1} * ${input2} = £${input1 * input2}`;
                break;
            case "subtract": result = `${input1} - ${input2} = £${input1 - input2}`;
                break;
            case "divide":
                //Checks if input is zero show an error message
                if (input2 === 0) {
                    result = "Division by zero is not allowed. Please try another number."
                } else { result = `${input1} / ${input2} = £${input1 / input2}` };
                break;
            case "clear": result = "";
                document.getElementById("number1").value = "";
                document.getElementById("number2").value = "";
                break;
        }
    }
    //Display results
    document.getElementById("displayArea").innerText = result;
}