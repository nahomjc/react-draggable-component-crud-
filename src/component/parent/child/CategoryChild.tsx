import React, { useState } from "react";
import "./child.css";
import Modal from "./Modal";
import { MinusIcon, PlusIcon, CorrectIcon } from "../../../utils/icons/Icon";
interface CategoryChildProps {
  name: string;
}
const CategoryChild: React.FC<CategoryChildProps> = ({ name }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<
    "service" | "category" | null
  >(null);
  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSelect = (type: "service" | "category") => {
    setSelectedType(type);
    setIsModalOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategoryName(event.target.value);
  };

  const handleInputSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isEditing && editingIndex !== null) {
      const newCategories = [...categories];
      newCategories[editingIndex] = newCategoryName;
      setCategories(newCategories);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setCategories([...categories, newCategoryName]);
      setNewCategoryName("");
      setIsAdding(false);
    }
    setSelectedType(null);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const handleEditClick = (index: number) => {
    setIsEditing(true);
    setEditingIndex(index);
  };

  console.log(name, "list");
  return (
    <div>
      <div className="sub-test">
        {" "}
        <div className="sub-container">{name}</div>
        <div>
          <PlusIcon
            className="add-icon"
            onClick={handleAddClick}
            style={{ marginLeft: "10px" }}
          />
        </div>
      </div>
      <Modal
        show={isModalOpen}
        onClose={handleModalClose}
        onSelect={handleModalSelect}
      />
      <div>
        {" "}
        {selectedType && (
          <form onSubmit={handleInputSubmit} onMouseDown={handleMouseDown}>
            <input
              type="text"
              value={isEditing ? newCategoryName : newCategoryName}
              placeholder={`Enter ${selectedType} name`}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>

      {isAdding && (
        <form onSubmit={handleInputSubmit} onMouseDown={handleMouseDown}>
          <input
            type="text"
            value={isEditing ? newCategoryName : newCategoryName}
            onChange={handleInputChange}
          />
        </form>
      )}
      {categories.map((category, index) => (
        <div key={index}>
          {category}
          <button onClick={() => handleEditClick(index)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default CategoryChild;
