import PortfolioList from "./PortfolioList";
import {
  PortfolioListItem,
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "./data";
import { useState, useEffect } from "react";
function Portfolio() {
  const [SelectedMenu, SetSelectedMenu] = useState("Featured");
  const [MenuData, SetMenuData] = useState("");
  useEffect(() => {
    switch (SelectedMenu) {
      case "Featured":
        SetMenuData(featuredPortfolio);
        break;
      case "Web App":
        SetMenuData(webPortfolio);
        break;
      case "Mobile App":
        SetMenuData(mobilePortfolio);
        break;
      case "Content":
        SetMenuData(designPortfolio);
        break;
      case "Design":
        SetMenuData(contentPortfolio);
        break;
      default:
        console.log("There is no item present");
    }
  }, [SelectedMenu]);
  return (
    <div className="PortfolioContainer" id="PortfolioContainer">
      <h1>Portfolio</h1>
      <ul className="PortfolioMenu">
        {PortfolioListItem.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              active={SelectedMenu === item.title}
              SetSelectedMenu={SetSelectedMenu}
            ></PortfolioList>
          );
        })}
      </ul>
      <div className="PortfolioDiv">
        {MenuData &&
          MenuData.map((data) => {
            return (
              <div className="DivItem">
                <img src={data.img} alt="" />
                <span className="DivItemText"> {data.title} </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Portfolio;
