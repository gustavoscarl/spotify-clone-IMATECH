// Menu Dropdown
const icon = document.querySelector('.hamburger-menu')
const list = document.querySelector('.mobile')

icon.addEventListener('click', () => {
  if (list.classList.contains('inactive')) {
    list.classList.remove('inactive');
    list.classList.add('active');
  } else {
    list.classList.add('inactive');
    list.classList.remove('active')
  } 
});

// Close Dropdown when Window > 601px

function closeDropdown(sizeWindow){
  if (sizeWindow.matches && list.classList.contains('active')) {
    list.classList.remove('active');
    list.classList.add('inactive');
  }
}

let sizeWindow = window.matchMedia("(min-width:751px)");

window.addEventListener('resize', () => {closeDropdown(sizeWindow)})
