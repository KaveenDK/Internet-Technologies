console.log("EventListeners.js loaded...");

// const box = document.querySelector('.box');

// ===== Mouse Event =====

// ===== 1. Single click event =====
// box.addEventListener('click', function () {
//     console.log("Box clicked");
// })

// ===== 2. Double click events =====
// box.addEventListener('dblclick', function() {
//     console.log("Double clicked the box");
// })

// ===== 3. Mouse down event =====
// box.addEventListener('mousedown', function () {
//     console.log("Mouse Pressed");
// })

// ===== 4. Mouse up event =====
// box.addEventListener('mouseup', function () {
//     console.log("Mouse released");
// })

// ===== 5. Mouse move event =====
// box.addEventListener('mousemove', function () {
//     console.log("Mouse moved");
// })

// ===== 6. Mouse over event =====
// box.addEventListener('mouseover', function () {
//     console.log("Mouse over the box");
// })

// ===== 7. Mouse out event =====
// box.addEventListener('mouseout', function () {
//     console.log("Mouse out of the box");
// })

// ===== Keyboard Event =====

// ===== 1. Keydown event =====

// let input = document.getElementById("input");
// input.addEventListener("keydown", function(event){
//     // console.log(event.key);
//     if(event.key === "Enter"){
//         alert("Enter key pressed");
//     }
// });


// ===== 2. Keyup event =====

// input.addEventListener("keyup", function(event){
//     console.log(event.key);
// });

// example
input.addEventListener("keydown", function(event){ 
    console.log(event.keyCode);

    let key = event.keyCode;

    if((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)){
        return;
    }
    event.preventDefault();
})
