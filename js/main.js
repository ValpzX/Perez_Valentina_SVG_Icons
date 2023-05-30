console.log("JS file connected");

const flavours = document.querySelectorAll("#burple-flavours svg");

console.log(flavours);

function logId() {
    console.log("The ID of the element that you have clicked is: " + this.id);
}

//Event Listeners
flavours.forEach(flavour => flavour.addEventListener("click", logId));