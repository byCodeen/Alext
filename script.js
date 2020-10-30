// Tab Controll

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

// Billet Diameter

$('select[data-menu]').each(function () {

  let select = $(this),
  options = select.find('option'),
  menu = $('<div />').addClass('select-menu'),
  button = $('<div />').addClass('button'),
  list = $('<ul />'),
  arrow = $('<em />').prependTo(button);

  options.each(function (i) {
    let option = $(this);
    list.append($('<li />').text(option.text()));
  });

  menu.css('--t', select.find(':selected').index() * -41 + 'px');

  select.wrap(menu);

  button.append(list).insertAfter(select);

  list.clone().insertAfter(button);

});

$(document).on('click', '.select-menu', function (e) {

  let menu = $(this);

  if (!menu.hasClass('open')) {
    menu.addClass('open');
  }

});

$(document).on('click', '.select-menu > ul > li', function (e) {

  let li = $(this),
  menu = li.parent().parent(),
  select = menu.children('select'),
  selected = select.find('option:selected'),
  index = li.index();

  menu.css('--t', index * -41 + 'px');
  selected.attr('selected', false);
  select.find('option').eq(index).attr('selected', true);

  menu.addClass(index > selected.index() ? 'tilt-down' : 'tilt-up');

  setTimeout(() => {
    menu.removeClass('open tilt-up tilt-down');
  }, 500);

});

$(document).click(e => {
  e.stopPropagation();
  if ($('.select-menu').has(e.target).length === 0) {
    $('.select-menu').removeClass('open');
  }
});

// Tooltip

$(function () {
  $('form>.control>.form-input').
  on('focus keyup', function () {
    if ($(this).val().length >= 0) {
      $(this).
      siblings('.form-tooltip,.form-tooltip-full').
      fadeIn('fast');
    } else {
      $(this).
      siblings('.form-tooltip,.form-tooltip-full').
      fadeOut('fast');
    }
  }).
  on('blur', function () {
    $(this).
    siblings('.form-tooltip,.form-tooltip-full').
    fadeOut('fast');
  });
});

// Billet Length

function blcCalc() {
  let OrderLength = document.getElementById("ol").value;
  let JointEnd = document.getElementById("je").value;
  let CavImp = document.getElementById("ci").value;
  let AlumWeight = document.getElementById("aw").value;
  let Cut = document.getElementById("fc").value;
  let Saw = document.getElementById("cst").value;
  let Cap = document.getElementById("be").value;
  let Diameter = document.getElementById("lBS").value;

  blc = (((((((OrderLength * Cut) + +JointEnd) * CavImp) * AlumWeight) / Diameter) * Saw) + +Cap);
  ol = ((OrderLength * Cut) + +JointEnd);

  document.getElementById("blcResult").innerHTML = (Math.round(blc * 100) / 100).toFixed(2) + "inch";
  document.getElementById("OutputLength").innerHTML = (Math.round (ol * 100) / 100).toFixed(2) + "Meter";
}

function mylReset() {
  document.getElementById("blcInput").reset();
  document.getElementById("blcResult").innerHTML = "Billet Size (inch)";
  document.getElementById("OutputLength").innerHTML = "Output Length (meter)";
}

// Billet Weight

function bwcCalc() {
  let BilletLength = document.getElementById("bl").value;
  let wBilletSize = document.getElementById("wBS").value;
  let BilletUsed = document.getElementById("bu").value;

  bwc = ((BilletLength * wBilletSize) * BilletUsed);

  document.getElementById("bwcResult").innerHTML = (Math.round (bwc * 100) / 100).toFixed(2) + "kg";
}

function mywReset() {
  document.getElementById("bwcInput").reset();
  document.getElementById("bwcResult").innerHTML = "Billet Weight (kg)";
}

// Profile Diff

function pdwCalc() {
  let ActualWeight = document.getElementById("paw").value;
  let CatalogWeight = document.getElementById("pcw").value;
  
  pdw = ((ActualWeight - CatalogWeight) / CatalogWeight) || 0;

  document.getElementById("pdwResult").innerHTML =  (Math.round (pdw * 100)).toFixed(0) + "%";
}


function mydReset() {
  document.getElementById("pdwInput").reset();
  document.getElementById("pdwResult").innerHTML = "Profile Different (%)";
}