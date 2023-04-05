const btn = document.querySelector('[data-form-btn]');
//Arrow functiond o funciones anonimas.
const createTask = (evento) => {
    evento.preventDefault()
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement("li");
    //Con esto logramos agregar una nueva clase a un elemento.
    task.classList.add("card")
    input.value = "";
    //Backticks ``
    //Uso de template strings una ventaja de ellos es que nosotros podemos combinar etiquetas html con propiedad o variables de js
    const content = `  <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;

    list.appendChild(task);

    console.log(content);
};


console.log(btn);

btn.addEventListener('click', createTask );

