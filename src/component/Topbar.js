import { Person, Mail } from "@material-ui/icons";
function Topbar({ MenuOpen, SetMenuOpen }) {
  return (
    <div className={"TopbarContainer " + (MenuOpen && "active")}>
      <div className="TopbarWrapper">
        <div className="Left">
          <a href="#IntroContainer" className="Logo">
            Portfolio
          </a>
          <div className="LeftItem">
            <Person className="LeftItemIcon"></Person>
            <span className="LeftItemText">+91 1234567891</span>
          </div>
          <div className="LeftItem">
            <Mail className="LeftItemIcon"></Mail>
            <span className="LeftItemText">user@portfolio.com</span>
          </div>
        </div>
        <div className="Right">
          <div className="Hamburger" onClick={() => SetMenuOpen(!MenuOpen)}>
            <span className="HamburgerLine" id="firstchild"></span>
            <span className="HamburgerLine" id="secondchild"></span>
            <span className="HamburgerLine" id="thirdchild"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
