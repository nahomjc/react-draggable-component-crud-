import React, { useState, useRef } from "react";
import Category from "./parent/Category";
interface Position {
  x: number;
  y: number;
}

const Draggable: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const ref = useRef<HTMLParagraphElement>(null);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (ref.current) {
      ref.current.style.left = `${event.clientX - position.x}px`;
      ref.current.style.top = `${event.clientY - position.y}px`;
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <p
      ref={ref}
      style={{
        position: "absolute",
        cursor: "move",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
    >
      Category <Category />
    </p>
  );
};

export default Draggable;
