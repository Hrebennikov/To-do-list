const button = document.querySelector('.submit');
const input = document.querySelector('.text');
const list = document.querySelector('.todo-list');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.className = 'todo-list-item';
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete';
    completeBtn.innerText = 'Complete';
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerText = 'Delete';
    li.innerText = input.value;
    list.appendChild(li);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    input.value = '';

    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);

    });

    completeBtn.addEventListener('click', () => {
        li.classList.add('crossed');
     });
});


 


