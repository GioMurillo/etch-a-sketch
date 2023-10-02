let container = document.getElementById('container');
let numSquares = 16;

createGrid(numSquares);

function createGrid(num) {
  if(typeof(num) !== "number") {
    console.log("Entry is not a number. Enter a number between 1 and 100 only.")
  } else if(num>100) {
    console.log("Numbers greater than 100 not accepted. Max grid size created.")

    //send warning saying too high of number and reduced to 100 max
    //create grid of 100x100
      //Generate 10000 squares
      //insert into container
  } else {
    //create grid of num x num dimension
    for(i=0; i<numSquares; i++) {
      for(j=0; j<numSquares; j++){
        const aSquare = document.createElement('div');
        aSquare.classList.add("square");
        container.appendChild(aSquare);
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
      }
    }
  }
}
