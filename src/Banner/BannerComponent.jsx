import React from "react";
import slidepic from "../assets/images/home-banner/slide-1-pic.png";
import CustomButton from "../buttonComponent/CustomButton";
import "../Banner/BannerComponent.css";

const BannerComponent = () => {
  return (
    <div className="homebanner">
      <div className=" container-fluid bgImage">
        <div className="row">
          <div className="col-lg-6 ">
            <img className="cloudimg" src={slidepic} alt="cloud" />
          </div>

          <div className="col-lg-6">
            <blockquote className=" textBlockquote">Bhashini aims to enable all Indians easy access to the Internet and digital services in their own language, and increase the content in Indian languages.</blockquote>
            <CustomButton
        text={"bhaashadan"}
        fontSize={"15px"}
        width={"166px"}
        height={"39px"}
        fontWeight={"700"}
        />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
