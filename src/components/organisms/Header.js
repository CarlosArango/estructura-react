import React from "react";
import MenuItem from "../molecules/MenuItem";

const menuItems = ["Home", "About", "Contact"];

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: "60px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 20,
        paddingLeft: 20,
      }}
    >
      <div style={{ flex: 1 }} />
      {menuItems.map((text) => {
        return <MenuItem textItem={text} />;
      })}
    </div>
  );
};

export default Header;
