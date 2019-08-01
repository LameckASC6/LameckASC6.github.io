let state = false; // true if expanded, false if closed
let newCircles = document.getElementsByClassName("moreCircles");
let arrows = document.getElementsByClassName("arrowButton");
let moreContent = document.getElementsByClassName("more");
let secondCircles = document.getElementsByClassName('secondCircleButton')


function expand() {
  state = !state;
  for (let arrow  of arrows     ) { change(arrow, !state, 'flex'); }
  for (let circle of newCircles ) { change(circle, state, 'flex'); }
  for (let more   of moreContent) { change(more, state, 'block'); }
  for (let circle of secondCircles) { change(circle, !state, 'flex') }
}

for (const arrow of arrows) {
  console.log(arrow);
  arrow.addEventListener('click', expand);
}

for(const circle of document.getElementsByClassName('secondArrowButton')){
  console.log(circle);
  circle.addEventListener('click', expand);
}

function change(element, show, style){
  if (show) {
    element.style.display = "none";
  } else {
    element.style.display = style;
  }
}


