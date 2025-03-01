console.log("EventHandling.js loaded...");

const saveBtn = document.getElementById("btnSave");

// 1. addEventListener() - Attaches an event handler to the specified element.
saveBtn.addEventListener("click", handleClick);

function handleClick() {
  console.log("Save button clicked...");
//   alert("Save button clicked...");
}

// saveBtn.addEventListener("click", function () {
//   console.log("Save button clicked...");
//   alert("Save button clicked...");
// });

// 2. removeEventListener() - Removes an event handler that has been attached with the addEventListener() method.
saveBtn.removeEventListener("click", handleClick);