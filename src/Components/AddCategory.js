import React, { useState } from "react";

export const AddCategory = ({categories, setCategories}) => {
  const [inputValue, setInputValue] = useState("");

  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) =>{
      event.preventDefault();
    setCategories([inputValue, ...categories ])
  }

  return (
      <form onSubmit={onSubmit}>
    <input
      type="text"
      placeholder="Buscar gifs"
      value={inputValue}
      onChange={inputChange}
    >
    </input>
    </form>
  );
};
