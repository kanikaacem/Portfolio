function PortfolioList({ title, active, SetSelectedMenu }) {
  return (
    <>
      <li
        className={active ? "PortfolioMenuItem active" : "PortfolioMenuItem"}
        onClick={() => {
          SetSelectedMenu(title);
        }}
      >
        {title}
      </li>
    </>
  );
}
export default PortfolioList;
