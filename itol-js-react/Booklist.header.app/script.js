window.onload = alert('welcome to my page!')

function changeText(){
    // find the heading and button element id 
    const heading = document.getElementById('header');
    const button = document.getElementById('button');

    //assign new text to the heading and button when button clicked element

    if(heading.innerHTML === 'Welcome to my Coding Portfolio'){
        heading.innerHTML = 'Success! Your interaction triggered dynamic content &#127881;';
        button.innerHTML = "Click to reset &#129299;";
    } else{
        heading.innerHTML = 'Welcome to my Coding Portfolio';
        button.innerHTML = "Click me &#128064";
    }
}

const library = []

function addBook(event){
    event.preventDefault();

    const input = document.getElementById("enterBook");
    const newBook = input.value.trim();
    
    if(newBook){
        library.push(newBook);
        input.value = "";
        displayBook();
    }

    function displayBook(){

    let text = " ";

    for(let i = 0; i <library.length; i++){
        text = text + library[i] + "<br>"
    };

    document.getElementById("book-list").innerHTML = text;
 };
}

console.log('Script loaded successfully')

