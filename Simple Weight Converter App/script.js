document.getElementById("output").style.visibility = "hidden";

var inputType = document.getElementById("weighttype");

var kgHeading = document.getElementById("kg");
var gmHeading = document.getElementById("gm");
var ozHeading = document.getElementById("oz");

document.getElementById("Input").addEventListener("input", (e) => {
  document.getElementById("output").style.visibility = "visible";
  var weight = e.target.value;

  if (weight != null || 0) {
    inputType.removeAttribute("disabled");
  }

  var choice;
  inputType.addEventListener("change", (e) => {
    choice = inputType.value;
    if (choice == "lbs") {
      document.getElementById("gramsOutput").innerHTML = weight / 0.0022046;
      document.getElementById("kgOutput").innerHTML = weight / 2.2046;
      document.getElementById("ozOutput").innerHTML = weight * 16;
    } else if (choice == "kg") {
      kgHeading.innerText = "Pounds";
      document.getElementById("gramsOutput").innerHTML = weight * 1000;
      document.getElementById("kgOutput").innerHTML = weight * 2.205;
      document.getElementById("ozOutput").innerHTML = weight * 35.274;
    } else if (choice == "oz") {
      ozHeading.innerText = "Pounds";
      document.getElementById("gramsOutput").innerHTML = weight / 0.0022046;
      document.getElementById("kgOutput").innerHTML = weight / 35.274;
      document.getElementById("ozOutput").innerHTML = weight * 16;
    } else if (choice == "gm") {
      gmHeading.innerText = "Pounds";
      document.getElementById("gramsOutput").innerHTML = weight / 453.6;
      document.getElementById("kgOutput").innerHTML = weight / 1000;
      document.getElementById("ozOutput").innerHTML = weight / 28.35;
    }
  });
});
