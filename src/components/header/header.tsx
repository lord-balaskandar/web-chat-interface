import { useState } from "react";
import profilePic from "./../../pp.jpg";
import "./header.css";

function Header({
  open,
  setOpen,
  setDropDownMenuData,
}: {
  open: boolean;
  setOpen: Function;
  setDropDownMenuData: Function;
}) {
  const handleOpen = (e: any) => {
    console.log("click");
    setDropDownMenuData({
      x: e.clientX,
      y: e.clientY,
    })
    setOpen(true);
  };

  return (
    <div className="headerContainer">
      {" "}
      <div className="header">
        <div className="details">
          <img className="pp" src={profilePic} />

          <div className="recipientName">Thanushen</div>
        </div>
        <button className="backButton" onClick={handleOpen}>
          {"..."}{" "}
        </button>
      </div>{" "}
    </div>
  );
}

export default Header;
