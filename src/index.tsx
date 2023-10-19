import React, { ReactNode, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const MyContext = React.createContext<any>({});

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [position, setPosition] = useState({ x: 800, y: 150 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const centerScreen = () => {
    const mainSection = document.getElementById("main");
    const box = document.getElementById("box");

    if (mainSection) {
      const width = mainSection.offsetWidth / 100 - 100;
      const height = mainSection.offsetHeight;

      if (box) {
        box.style.transition = `0.3s linear all`;
        box.style.top = `${height}px`;
        box.style.left = `${width}px`;
        setOffset({ x: 0, y: 0 });
        setPosition({ x: width, y: height });
        setDragging(false);
      }
    }
  };

  const value: any = {
    centerScreen,
    position,
    setPosition,
    dragging,
    setDragging,
    offset,
    setOffset,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);
