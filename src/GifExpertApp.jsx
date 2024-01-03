// Ya no hace falta hacer el import
    // import React from "react";

import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Two Punch']) 

    const onAddCategory = (newCategory) => {
        // No utilizar push(). Utilizar operador spread '...'
        // console.log(newCategory);
        if (categories.includes(newCategory)) return; // Si el nuevo elemento ya existe, no lo añado 
        setCategories( [newCategory, ...categories] );
    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Campo texto añadir categorias */}
            <AddCategory
                onNewCategory={ (value) => onAddCategory(value) } // Enviamos como property la función "onAddCategory"
            />
            
            {
                // 'category' contiene en cada iteración un elemento del vector 'categories'   
                categories.map( (category) => (
                        <GifGrid 
                            category={ category }/>
                ))
            }
        </>
    )

}