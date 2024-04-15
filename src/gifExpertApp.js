import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One"]);

 

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory setCategories={setCategories} categories={categories} />

      {categories.map((category, i) => (
        <GifGrid key={category + i} category={category} />
      ))}
    </>
  );
};
