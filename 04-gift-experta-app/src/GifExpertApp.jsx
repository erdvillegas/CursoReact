import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const initialState = ['Super Mario Bros','The legend Of Zelda'];
    const [categories, setCategories] = useState(initialState);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />
            {
                categories.map((category) =>
                    <GifGrid key={category} category={category} />
                )
            }
        </>
    )
}