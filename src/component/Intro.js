import { init } from "ityped";
import { useEffect, useRef } from "react";
function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Developer", "Designer", "Animator"],
      backSpeed: 50,
    });
  }, []);
  return (
    <div className="IntroContainer" id="IntroContainer">
      <div className="IntroContainerWrapper">
        <div className="IntroLeft">
          <div className="IntroImageDiv">
            <div className="ImageBorderDiv">
              <img src="assets/man.png" className="IntroImage" alt=""></img>{" "}
            </div>
          </div>
        </div>
        <div className="IntroRight">
          <h1> Hi there, I am</h1>
          <span className="userName">Protofolio User</span>
          <span>
            Freelancer <span ref={textRef}> </span>
          </span>
          <a href="#PortfolioContainer">
            <img className="DownArrowImage" src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
