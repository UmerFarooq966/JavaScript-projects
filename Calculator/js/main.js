document.querySelectorAll(".sign, .number, .clear").forEach((item) => {
  item.addEventListener("click", clicked);

  function clicked(e) {
    const value = e.target.getAttribute("data-value");
    const input = document.getElementById("input");

    if (value === "=") {
      input.value = eval(input.value);
    } else if (value == "C") {
      input.value = "";
    } else {
      input.value += value;
    }
  }
});
