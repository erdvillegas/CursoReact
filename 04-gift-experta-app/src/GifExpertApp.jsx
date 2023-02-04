import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['The Legend Of Zelda', 'Silent Hill 2']);

    const onAddCategory = () => {
        // setCategories([...categories,'valor']);
        console.log('Vlor');
        setCategories(cat => ['Valorant', ...categories]);
    };

    return (
        <>

            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                setCategories={setCategories}
            />

            {/* Listado de Gif */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
            {/* Gif Item */}
        </>
    )
}