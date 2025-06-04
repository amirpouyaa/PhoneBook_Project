//selector

const todoNameInput = document.querySelector('.todo-name-input');
const todoMobileInput = document.querySelector('.todo-mobile-input');
const todoButton = document.querySelector('.todo-button');

//event listener
todoButton.addEventListener('click', addItem);

//function
function addItem(event) {
    event.preventDefault();
    console.log(event);
}