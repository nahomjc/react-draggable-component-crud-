import React from "react";
import "./modal.css";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onSelect: (type: "service" | "category") => void;
}
const handleMouseDown = (event: React.MouseEvent) => {
  event.stopPropagation();
};
const Modal: React.FC<ModalProps> = ({ show, onClose, onSelect }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose} onMouseDown={handleMouseDown}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Select type</h2>
        <button onClick={() => onSelect("service")}>Service</button>
        <button onClick={() => onSelect("category")}>Category</button>
      </div>
    </div>
  );
};

export default Modal;
