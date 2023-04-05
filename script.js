
    import checkComplete from "./componets/checkComplete.js";
    import deleteIcon from "./componets/deleteIcon.js";
    const btn = document.querySelector('[data-form-btn]');
//Arrow functiond o funciones anonimas.
const createTask = (evento) => {
    evento.preventDefault()
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    //Con esto logramos agregar una nueva clase a un elemento.
    task.classList.add('card')
    input.value = '';
    //Backticks ``
    //Uso de template strings una ventaja de ellos es que nosotros podemos combinar etiquetas html con propiedad o variables de js
    const taskContent = document.createElement('div');

    const tittleTask = document.createElement('span');
    tittleTask.classList.add('task');
    tittleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(tittleTask);
    //taskContent.appendChild(deleteIcon());
    // task.innerHTML = content;

    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
};
btn.addEventListener('click', createTask );


 
