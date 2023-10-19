import React, { useState, useRef } from "react";
import Category from "./parent/Category";
import "./main.css";
import { AngleUp, AngleDown, AngleLeft, AngleRight } from "../utils/icons/Icon";
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
        x: event.clientX - rect.left + 3,
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
    <main>
      <div className="container" id="main">
        <div
          id="box"
          className="box"
          ref={ref}
          style={{
            position: "absolute",
            cursor: "move",
            userSelect: "none",
          }}
          onMouseDown={handleMouseDown}
        >
          <Category />
        </div>
      </div>
      <div className="up-arrow arrow">
        <AngleUp />
      </div>
      <div className="right-arrow arrow">
        <AngleRight />
      </div>
      <div className="down-arrow arrow">
        <AngleDown />
      </div>
      <div className="left-arrow arrow">
        <AngleLeft />
      </div>
    </main>
  );
};

export default Draggable;
