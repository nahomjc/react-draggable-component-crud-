import React, { useState } from "react";
import "./child.css";
interface CategoryChildProps {
  name: string;
}

const CategoryChild: React.FC<CategoryChildProps> = ({ name }) => {
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
      <div>
        {name} <button onClick={handleAddClick}>Add</button>
      </div>

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
      {categories.map((category, index) => (
        <div key={index}>{category}</div>
      ))}
    </div>
  );
};

export default CategoryChild;
