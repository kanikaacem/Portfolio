function Menu({ MenuOpen, SetMenuOpen }) {
  return (
    <div className={"MenuContainer " + (MenuOpen && "active")}>
      <div className="MenuContainerWrapper">
        <ul className="Menus">
          <li className="MenuItems" onClick={() => SetMenuOpen(false)}>
            <a href="#IntroContainer"> Intro </a>
          </li>
          <li className="MenuItems" onClick={() => SetMenuOpen(false)}>
            <a href="#PortfolioContainer"> Portfolio </a>
          </li>
          <li className="MenuItems" onClick={() => SetMenuOpen(false)}>
            <a href="#DesignationContainer"> Designation </a>
          </li>
          <li className="MenuItems" onClick={() => SetMenuOpen(false)}>
            <a href="#TestimonialContainer"> Testimonial </a>
          </li>
          <li className="MenuItems" onClick={() => SetMenuOpen(false)}>
            <a href="#ContactContainer"> Contact </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
