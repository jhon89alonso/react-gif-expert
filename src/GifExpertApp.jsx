import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }
    //console.log(newCategory);
    // categories.push("gate");
    setCategories([newCategory, ...categories]);
    //setCategories(cat =>[...categories, "Gate"]);
  };

  //console.log(categories);
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {categories.map((category) => (
        // <div key={category}>
        //   <h3>{category}</h3>
        //   <li>{category}</li>
        // </div>
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};
