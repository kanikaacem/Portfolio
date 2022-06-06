import Contact from "./component/Contact";
import Designation from "./component/Desingation";
import Intro from "./component/Intro";
import Portfolio from "./component/Portfolio";
import Testimonial from "./component/Testimonial";
import Topbar from "./component/Topbar";
import Menu from "./component/Menu";
import { useState } from "react";
function App() {
  const [MenuOpen, SetMenuOpen] = useState(false);
  return (
    <div className="MainContainer">
      <Topbar MenuOpen={MenuOpen} SetMenuOpen={SetMenuOpen}></Topbar>
      <Menu MenuOpen={MenuOpen} SetMenuOpen={SetMenuOpen}></Menu>
      <div className="Sections">
        <Designation></Designation>
      </div>
    </div>
  );
}

export default App;
