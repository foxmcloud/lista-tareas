

//Declaracion de variables a utilizar
const tareaInput = document.getElementById("tareaInput"); // input
const btnAgregarTarea = document.getElementById("btnAgregarTarea"); // boton agregar
const listaTareas = document.getElementById("listaTareas"); // lista de tareas <ul>
const noHayTareas = document.getElementById("HayTareas"); // mensaje que presenta si hay o no tareas. 


//construyo funcion para evento click en boton de Agregar.

btnAgregarTarea.addEventListener("click", () => {

    const valorInput = tareaInput.value.trim(); // Obtengo el valor del input.
    if(valorInput){    // Si el valor tiene contenido ...

        noHayTareas.textContent = "";  //Como se va a anadir un nuevo elemento, vacio el mensaje de que no hay tareas disponibles.

        const nuevaTarea = document.createElement("li"); // Creo elemento li de la nueva tarea y le agrego clases css 
        nuevaTarea.classList.add("tarea");                 //posteriormente para mejorar un poco el estilo
        nuevaTarea.classList.add("tarea-pendiente");

        const textoTarea = document.createElement("span"); //Se crea un span que va a contener el texto de la tarea
        textoTarea.textContent =  valorInput;
        textoTarea.classList.add("textoTarea"); // se agrega clase a la misma.
        
        
        const botonEliminar = document.createElement("span"); // Se crea un span que va a contener el boton para eliminar las tareas.
        botonEliminar.classList.add("boton-eliminar");

        nuevaTarea.addEventListener("click", () => {     // para el elemento li escucho el evento click
            nuevaTarea.classList.toggle("tarea-completada");  // utilizo toggle para intercambiar el estado 
            nuevaTarea.classList.toggle("tarea-pendiente");   // de la tarea, de pendiente a completado, y de completado a pendiente.
        } )

        botonEliminar.addEventListener("click", () => { // para el boton eliminar creado, programamos tambien el evento click
            const item = botonEliminar.parentElement; // si se clickeo el boton, se procede a obtener al elemento padre, en este caso el li.
            item.remove();  // se elimina del DOM. 

            if (!listaTareas.hasChildNodes()){   // si en el caso que sea la unica tarea en el listado, se vuelva a desplegar este mensaje.
                noHayTareas.textContent = "No tiene tareas disponibles";
            }
        } )

        nuevaTarea.appendChild(textoTarea); // se agrega como hijo el texto de la tarea (etiqueta span)
        nuevaTarea.appendChild(botonEliminar); // Se agrega como hijo el boton eliminar (etiqueta span)
        listaTareas.appendChild(nuevaTarea); // Se agrega como hijo nuestro li al padre ul. 
        tareaInput.value = "";  // se vacia contenedor del input para que no se mantenga el mismo valor.


    } else { // sino se le solicita al usuario que ingrese un dato.
        alert("Por favor, ingrese Tarea a realizar");
    }

})