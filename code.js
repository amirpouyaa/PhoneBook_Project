const todoNameInput = document.querySelector('.todo-name-input')
const todoMobileInput = document.querySelector('.todo-mobile-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const selectBox = document.querySelector('.type-todo')

//event listner
todoButton.addEventListener('click', addItem)

//function
function addItem(event){
    event.preventDefault()
    console.log(event)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    //create li
    const newItem = document.createElement('li');
    const nameSpan = document.createElement('span')
    const mobileSpan = document.createElement('span')
    const typeSpan = document.createElement('span')
    nameSpan.innerText = todoNameInput.value;
    mobileSpan.innerText = todoMobileInput.value;
    typeSpan.innerText = selectBox.options[selectBox.selectedIndex].innerText
    newItem.appendChild(nameSpan)
    newItem.appendChild(mobileSpan)
    newItem.appendChild(typeSpan)
    newItem.classList.add('todo-item')
    todoDiv.appendChild(newItem)
    //append div to ul
    todoList.appendChild(todoDiv)
}
