import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    // categories.push("gate");
    setCategories([newCategory,...categories]);
    //setCategories(cat =>[...categories, "Gate"]);
  };

  console.log(categories);
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* <button onClick={onAddCategory}>Agregar</button> */}

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
