import React, { useState } from "react";
import CategoryChild from "./child/CategoryChild";
import "./parent.css";
import {
  MinusIcon,
  PlusIcon,
  CorrectIcon,
  Close,
} from "../../utils/icons/Icon";
const Category: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [EditCategoryName, setEditCategoryName] = useState<string>("");
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleAddClick = () => {
    setIsAdding(true);
    setNewCategoryName("");
    setIsEditing(false);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategoryName(event.target.value);
  };
  const handleInputChangeEdit = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditCategoryName(event.target.value);
    setIsAdding(false);
  };

  const handleInputSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isEditing) {
      const newCategories = [...categories];
      newCategories[editingIndex] = EditCategoryName;
      setCategories(newCategories);

      setEditingIndex(null);
      setIsAdding(false);
    } else {
      setCategories([...categories, newCategoryName]);
      setIsAdding(false);
      setIsEditing(false);
    }
    setNewCategoryName("");
  };
  const closeInput = () => {
    setIsAdding(false);
  };
  const handleMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const handleDelete = (index: number) => {
    const newCategories = [...categories];
    newCategories.splice(index, 1);
    setCategories(newCategories);
    setIsEditing(false);
  };
  const handleEditClick = (index: number) => {
    setIsEditing(true);
    setEditingIndex(index);
    setIsAdding(false);
    setEditCategoryName(categories[index]);
  };
  return (
    <div>
      <div className="category-container">
        <div className="category-box">
          {" "}
          <p>Category</p>{" "}
          <PlusIcon className="add-icon" onClick={handleAddClick} />
        </div>
        <div></div>
      </div>
      {isAdding && (
        <form onSubmit={handleInputSubmit} onMouseDown={handleMouseDown}>
          <input
            type="text"
            value={newCategoryName}
            onChange={handleInputChange}
          />
          <CorrectIcon
            className="correct-icon"
            onClick={handleInputSubmit}
            style={{ fill: "white", width: "24px", height: "24px" }}
          />
          <Close
            className="correct-icon"
            style={{ fill: "white", width: "20px", height: "20px" }}
            onClick={closeInput}
          />
        </form>
      )}
      <div className="test-container">
        {categories.map((category, index) => (
          <div key={index}>
            {" "}
            <CategoryChild name={category} />
            <Close
              className="correct-icon"
              style={{
                fill: "white",
                width: "20px",
                height: "20px",
              }}
              onClick={() => handleDelete(index)}
            />
            <button onClick={() => handleEditClick(index)}>Edit</button>
          </div>
        ))}
      </div>
      {isEditing && (
        <form onSubmit={handleInputSubmit} onMouseDown={handleMouseDown}>
          <input
            type="text"
            value={EditCategoryName}
            onChange={handleInputChangeEdit}
          />
          <button type="submit">Submitc</button>
        </form>
      )}
    </div>
  );
};

export default Category;
