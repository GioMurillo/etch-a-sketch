let container = document.getElementById("container");
let numSquares = 16;

createGrid(numSquares);

//create a button
const changeGridSizeButton = document.createElement("button");
//give button text
const buttonText = document.createTextNode("Change Row/Column Count");
changeGridSizeButton.appendChild(buttonText);
//insert button before the grid container
document.body.insertBefore(changeGridSizeButton, container);
//add a prompt that will create a new grid
changeGridSizeButton.addEventListener("click", e => {
  container.replaceChildren(); //delete all divs within container
  createGrid(Number(prompt("Enter number under 100", 16)))});
  
function createGrid(num) {
  if(typeof(num) !== "number") {
    alert("Entry is not a number. Enter a number between 1 and 100 only.")
  } else if(num>100) {
    alert("Numbers greater than 100 not accepted. Max grid size created.")
    createGrid(100);
    //send warning saying too high of number and reduced to 100 max
    //create grid of 100x100
      //Generate 10000 squares
      //insert into container
  } else {
    //create grid of num x num dimension
    for(i=0; i<numSquares; i++) {
      for(j=0; j<numSquares; j++){
        const aSquare = document.createElement("div");
        aSquare.classList.add("square");
        container.appendChild(aSquare);
        //this needs to change every time numSquares is changed
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
      }
    }
    //create an array of the squares in the document
    const squares = Array.from(document.querySelectorAll(".square"));
    //add an event listener for a mouseover on the squares
    squares.forEach(square => square.addEventListener("mouseover", shadeSquare));
  }
}



//function to change the class of the squares
function shadeSquare(e) {
  e.target.classList.add("shaded");
}