/* eslint-disable react/prop-types */
import React from "react";
import Text from "../atoms/Text";

const MenuItem = ({ textItem }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <span style={{ marginRight: 20 }}>Icon</span>
      <Text>{textItem}</Text>
    </div>
  );
};

export default MenuItem;
