import { DesignationWorkData } from "./data";
import { useState } from "react";
function Designation() {
  const [currentSlide, SetCurrentSlide] = useState(0);
  return (
    <div className="DesignationContainer" id="DesignationContainer">
      <div className="arrows">
        <div
          className="RightArrow"
          onClick={() =>
            currentSlide === 0
              ? SetCurrentSlide(0)
              : SetCurrentSlide(currentSlide - 1)
          }
        >
          <img className="RightArrowImage" src="/assets/arrow.png" alt=""></img>
        </div>
        <div
          className="LeftArrow"
          onClick={() =>
            currentSlide === DesignationWorkData.length - 1
              ? SetCurrentSlide(0)
              : SetCurrentSlide(currentSlide + 1)
          }
        >
          <img className="LeftArrowImage" src="/assets/arrow.png" alt=""></img>
        </div>
      </div>
      {DesignationWorkData.map((data) => {
        return (
          <div
            className="slider"
            id={data.id}
            style={{
              left: (data.id - 1) * 100 + "%",
              transform: `translateX(-${currentSlide * 100}vw)`,
            }}
          >
            <div className="container">
              <div className="item">
                <div className="left">
                  <img src={data.logo} className="DesignationImage" alt="" />
                  <h1 className="DesignationTitle">{data.title}</h1>
                  <p className="DesignationParagraph">{data.desc}</p>
                  <p className="DesignationLink">Projects</p>
                </div>
                <div className="right">
                  <img src="/assets/web.png" alt="" className="RightImage" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Designation;
