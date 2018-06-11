// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!

  while (canvas.hasChildNodes()) {
  canvas.removeChild(canvas.lastChild);
  }

  let rows = document.getElementById("inputHeight").value;
  let columns = document.getElementById("inputWidth").value;
  let totalheight = (400 / rows) - 0.2;
  let totalwidth = (400 / columns) - 0.2;
  let numberBoxes = rows * columns

  for (let i = 0; i < numberBoxes; i++) {

      var field = document.createElement('div');
      //field.classList.add(i);
      //field.setAttribute("value", i);
      field.setAttribute("class", i);
      field.style.height = totalheight + "px";
      field.style.width = totalwidth + "px";
      field.addEventListener('click', function respondToTheClick(evt) {
        giveMeColor(evt)
    });
      canvas.appendChild(field);
  }

};

const canvas = document.getElementById('pixelCanvas');
const grid = document.querySelector('input[type=submit]');

grid.addEventListener('click', function start(event) {
  event.preventDefault();
  makeGrid()
});

function giveMeColor(evt) {
  let pixelNumber = evt.target.classList;
  let pixel = document.getElementsByClassName(pixelNumber);
  pixel[0].style.backgroundColor = document.getElementById('colorPicker').value;
};

let trueColors = colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
    return event.target.value;
}
