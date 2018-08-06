function selectFolder(event) {
  event.preventDefault();
  event.stopPropagation();

  if(event.shiftKey){
    this.classList.toggle('is-selected');
  } else {
    let selected = document.querySelectorAll(".is-selected");
    for (let i = 0; i < selected.length; i++) {
      if(this.className.indexOf('is-selected') < 0) {
        selected[i].classList.remove('is-selected');
      }
    }
    this.classList.toggle('is-selected');
  }
}

function removeSelection() {
  let selected = document.querySelectorAll(".is-selected");
  for (let i = 0; i < selected.length; i++) {
    selected[i].classList.remove('is-selected');
  }
}

let folders = document.querySelectorAll(".catalog-block");


for (let i = 0; i < folders.length; i++) {
  folders[i].addEventListener('click', selectFolder);
}

document.addEventListener('click', removeSelection);