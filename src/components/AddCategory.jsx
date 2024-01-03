// Componente que se encarga de mostrar formulario con un campo de texto de entrada + un botón para introducir categorias.

// Ya no hace falta hacer el import
    // import React from "react";

import { useState } from "react";
   
export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState();

    // Cambiamos estado ante cualquier tecleo
    const onInputChange = ({target}) => { // Hemos desestructurado 'target' de event para evitar tener que poner en todos lados 'event.target'
        setInputValue(target.value); //target es un objeto de event. value es un atributo de target.  
    }

    // Cambiamos estado al enviar formulario
    const onSubmit = (event) => {
        event.preventDefault(); // Evita hacer un refresh del navegador
        if (inputValue.trim().length <= 1) return; // tamaño menor o igual a 1, salimos.
        onNewCategory(inputValue.trim());
        setInputValue(''); // tras insertar nuevo valor, limpamos el campo de texto
    }

    return (
        <form onSubmit={ onSubmit }>  
            <input
                type = "text"
                placeholder = "Buscar gifs"      
                value = { inputValue }
                onChange = {onInputChange} // Equivale a onChange={(event) => onInputChange(event))}
            />
        </form>
    )
}