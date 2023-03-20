import React from "react";
import "./MainPanel.css";
import "../Fontstyle.css";

const MainPanel = () => {
  return (
    <>
      {/* <!-- Vision Section Starts --> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="vision">
              <h1
                // style={{ fontSize: getDefaultFontSize[SIXTEEN].fontValue }}
                className="vtxt"
              >
                VISION
              </h1>
            </div>
            <div className="para">
              <p>
                {" "}
                Harness natural language technologies to enable a diverse
                ecosystem of contributors, partnering entities and citizens for
                the purpose of transcending language barriers, thereby ensuring
                digital inclusion and digital empowerment in an <br /> Aatma
                Nirbhar Bharat this is digital india corporation
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Vision Section Ended--> */}
      {/* <!-- Enabling a more inclusive future Section Starts --> */}

      <div className="container-fluid bg-blue">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h1 className="block-heading ">
                  Enabling a more inclusive future
                </h1>
                <p className="para2">this is a para about something</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPanel;
