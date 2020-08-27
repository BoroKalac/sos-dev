function navFunction() {
    var x = document.getElementById("navigationTop");
    if (x.className === "navigation-top") {
      x.className += " responsive";
    } else {
      x.className = "navigation-top";
    };
  }