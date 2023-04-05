const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener("click",completeTask);
    return i;
};

//Usaremos algo llamado Imnediately invoked function expression o IIFE
//Son tal cual funciones en cuanto se declaran se ejecutan 
const completeTask = (event) =>{
    const element = event.target;
    //toggle verifica si existe o no la clase, si existe la quita, sino existe la agrega
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon')
    element.classList.toggle('far');
};

export default checkComplete;