import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    console.log("gate");
    // categories.push("gate");
    setCategories([...categories, "Gate"]);
    //setCategories(cat =>[...categories, "Gate"]);
  };

  console.log(categories);
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories}/>
      

      {/* <button onClick={onAddCategory}>Agregar</button> */}

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
