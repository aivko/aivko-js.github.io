const collapse = document.querySelectorAll(".collapse");

for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener('click', highlight);
}

function highlight(event) {
  event.preventDefault();
  event.stopPropagation();
  event.shiftKey
      ? event.target.classList.toggle('highlight')
      : singleHighlight(event)
}

function singleHighlight(event){
  const selected = document.querySelectorAll(".highlight");
  for (let i = 0; i < selected.length; i++) {
    selected[i].classList.remove('highlight');
  }
  event.target.classList.toggle('highlight')
}

const arrow = document.querySelectorAll(".collapse .arrow");
for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener('click', collapsedExpanded);
}

function collapsedExpanded(event) {
  event.preventDefault();
  event.stopPropagation();
  event.target.closest(".collapse").classList.toggle('active')
}