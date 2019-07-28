function read() {
    let more = document.getElementById("more");
    let moreCircles = document.getElementById("moreCircles");
    let secondCircle = document.getElementById("secondCircleButton");
    
    if (more.style.display === "none") {
      more.style.display = "block";
      moreCircles.style.display = "flex";
      secondCircle.style.display = "none";
    } else {
      more.style.display = "none";
      moreCircles.style.display = "none";
      secondCircle.style.display = "flex";
    }
  }