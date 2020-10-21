const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
  card.classList.add("is-active") :
  card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});
//# sourceURL=pen.js

function blcCalc() {
    var OrderLength = document.getElementById("mtr").value;
    var JointEnd = document.getElementById("wmtr").value;
    var CavImp = document.getElementById("cvt").value;
    var AlumWeight = document.getElementById("kgm").value;
    var Cut = document.getElementById("pcs").value;
    var Saw = document.getElementById("times").value;
    var Cap = document.getElementById("cap").value;
    var Diameter = document.getElementById("billetsize").value;

    bmi = ((((OrderLength * Cut + JointEnd) * CavImp) * AlumWeight / Diameter) * Saw + +Cap);

    document.getElementById("blcResult").innerHTML = (Math.round(bmi * 100) / 100).toFixed(2) + "inch";
  }
  function myReset() {
    document.getElementById("input").reset();
  }