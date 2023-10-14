import React, { useState } from "react";
import CategoryChild from "./child/CategoryChild";
import "./parent.css";
const Category: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategoryName(event.target.value);
  };

  const handleInputSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setCategories([...categories, newCategoryName]);
    setNewCategoryName("");
    setIsAdding(false);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div>
      <button onClick={handleAddClick} className="button">
        Add
      </button>
      {isAdding && (
        <form onSubmit={handleInputSubmit} onMouseDown={handleMouseDown}>
          <input
            type="text"
            value={newCategoryName}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <div className="container">
        {categories.map((category, index) => (
          <div key={index}>
            <CategoryChild name={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
