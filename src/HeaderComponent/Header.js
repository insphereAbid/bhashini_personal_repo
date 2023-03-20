import React from "react";
import img1 from "../HeaderImages/laptop.png";
import img2 from "../HeaderImages/resizer-icon.png";
import img3 from "../HeaderImages/text.png";
import img4 from "../HeaderImages/language-icon.png";
import img5 from "../HeaderImages/gov-logo-1.png";

import "../App.css";

const Header = () => {
  return (
    <div>
      <div className=" top_head">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-5 col-lg-5"></div>
            <div className="col-xs-12 col-md-7 col-lg-7">
              <div className="top-bar">
                <ul className="top_bar_element">
                  <li>
                    <img className="skip_img" src={img1} alt="" title="" /> <span className=""> Skip
                    to main Content</span>
                  </li>
                  <li>
                    <img className="tr_img" src={img2} alt="" title="" />
                    <span className="plus">+A</span>
                    <span className="plus">A</span>
                    <span className="plus">-A</span>
                  </li>
                  <li>
                    <img className="screen_img" src={img3} alt="" tiltle="" />
                    Screen Reader
                  </li>
                  <li>
                    <img className="lang_img" src={img4} alt="" tiltle="" />
                    <select className="lang_select">
                      <option>English</option>
                      <option>Hindi</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12  ">
              <div className="header_main">
                <div className="header_main_item">
                  <img className="gov_logo_img" src={img5} alt="" tiltle="" />
                </div>

                <div className="header_main_item">
                  <img
                    className="G2_Bhashini_img"
                    src="https://bhashini-reacts-staging.azurewebsites.net/static/media/logo.c9cfa513fbbbd9f7d5d4.svg"
                    alt=""
                    tiltle=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// https://bhashini-reacts-staging.azurewebsites.net/static/media/logo.c9cfa513fbbbd9f7d5d4.svg
