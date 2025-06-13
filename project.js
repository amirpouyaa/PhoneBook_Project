const todoNameInput = document.querySelector('.todo-name-input')
const todoMobileInput = document.querySelector('.todo-mobile-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const selectBox = document.querySelector('.type-todo')
const filterOption = document.querySelector('.filter-todo')

//event listner
todoButton.addEventListener('click', addItem)
todoList.addEventListener('click', deleteItem)
filterOption.addEventListener('click', filterContacts)
document.addEventListener('DOMContentLoaded', getContacts)

//function
function addItem(event) {
    event.preventDefault()
    // console.log(event)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    todoDiv.classList.add(selectBox.options[selectBox.selectedIndex].value)
    //create li
    const newItem = document.createElement('li');
    const nameSpan = document.createElement('span')
    const mobileSpan = document.createElement('span')
    const typeSpan = document.createElement('span')
    nameSpan.innerText = todoNameInput.value;
    mobileSpan.innerText = todoMobileInput.value;

    typeSpan.innerText = selectBox.options[selectBox.selectedIndex].innerText;
    newItem.appendChild(nameSpan)
    newItem.appendChild(mobileSpan)
    newItem.appendChild(typeSpan)
    newItem.classList.add('todo-item')
    todoDiv.appendChild(newItem)

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton)
    //append div to ul
    todoList.appendChild(todoDiv)

    saveLocalContact({
        name: todoNameInput.value,
        number: todoMobileInput.value,
        type: selectBox.options[selectBox.selectedIndex].innerText
    })

    todoMobileInput.value = ''
    todoNameInput.value = ''
    filterOption.style.display = 'block'
}

function deleteItem(event) {
    console.log(event.target)
    const item = event.target
    if (item.classList[0] === 'trash-button') {
        const contact = item.parentElement;
        contact.classList.add('fall')
        setTimeout(() => {
            contact.remove()
        }, 2000)
        removeLocalContact(contact)
    }
}