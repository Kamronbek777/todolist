let toDoInput = document.querySelector('input');
let toDoList = document.querySelector('.to__do__list');
let toDoButton = document.querySelector('button');
let toDoForm = document.querySelector('form');


toDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var toDoValue = toDoInput.value.trim();

    if (toDoValue) {
        let toDoItem = document.createElement('li'); 
        toDoItem.innerHTML = `
            <input type="checkbox">${toDoValue}</input>
        `;
        toDoList.appendChild(toDoItem);
        toDoInput.value = '';
    }
})
