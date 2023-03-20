import React from "react";
import { Button } from "react-bootstrap";
import parse from "html-react-parser";
import "./CustomButton.css"


const CustomButton = ({ text, width, height, fontSize, ...rest }) => {
  return (
    <>
      <Button
        className={"btnBg"}
        style={{
          width: width,
          height: height,
          fontSize: fontSize,
          fontWeight: rest.fontWeight === undefined ? "400" : rest.fontWeight,
        }}
      >
        {parse(text)}
      </Button>
    </>
  );
};

export default CustomButton;
