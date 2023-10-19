import React, { useState, useContext } from "react";
import { MinusIcon, PlusIcon, CursorIcon } from "../../utils/icons/Icon";

import "./header.css";
import { MyContext } from "../..";

const Header: React.FC = () => {
  const [zoom, setZoom] = useState<number>(100);
  const { centerScreen } = useContext(MyContext);

  const increaseZoom = () => {
    setZoom((prevZoom: number) => prevZoom + 25);
    const mainSection: any = document.getElementById("main");
    if (mainSection) {
      mainSection.style.transform = `scale(${(zoom + 25) / 100})`;
      mainSection.style.transformOrigin = "center";
    }
  };

  const decreaseZoom = () => {
    if (zoom > 25) {
      setZoom((prevZoom: number) => prevZoom - 25);
      const mainSection: any = document.getElementById("main");
      if (mainSection) {
        mainSection.style.transform = `scale(${(zoom - 25) / 100})`;
        mainSection.style.transformOrigin = "center";
      }
    }
  };
  const handleChange = (event: any) => {
    setZoom(Number(event.target.value));
    const mainSection: any = document.getElementById("main");
    mainSection.style.transform = `scale(${(event.target.value - 25) / 100})`;
  };

  return (
    <div className="header">
      <div className="services">
        <h2>Services</h2>
        <p>0</p>
      </div>
      <div>
        <button className="button">List View</button>
        <div className="icon-container">
          <CursorIcon className="icon" onClick={centerScreen} />
        </div>
        <div className="zoom">
          <div className="icon-container" onClick={decreaseZoom}>
            <MinusIcon className="icon" />
          </div>

          <select className="zoom-value" onChange={handleChange}>
            <option value={zoom}>{zoom}%</option>
            <option value={200}>200%</option>
            <option value={150}>150%</option>
            <option value={90}>90%</option>
            <option value={80}>80%</option>
            <option value={60}>60%</option>
            <option value={40}>40%</option>
            <option value={20}>20%</option>
          </select>
          <div className="icon-container" onClick={increaseZoom}>
            <PlusIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
