function Designation() {
  return (
    <div className="DesignationContainer" id="DesignationContainer">
      <div className="arrows">
        <img className="LeftArrow" src="/assets/arrow.png" alt="" />
      </div>

      <div className="DesignationWorks">
        <div className="DesignationLeft">
          <img className="DesignationImage" src="/assets/mobile.png" alt="" />
          <h1 className="Title">Title</h1>
          <span className="DesignationContent">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            officiis suscipit harum? Nobis saepe blanditiis officia nihil
            deleniti iste quae in? Officiis nisi mollitia accusamus vel
            doloremque fugiat aut libero?
          </span>
          <br></br>
          <br></br>
          <span className="DesignationLink">Projects</span>
        </div>
        <div className="DesignationRight">
          <div className="DesignationRightImage">
            <img className="Imge" src="/assets/web.png" alt="" />
          </div>
        </div>
      </div>

      <div className="arrows">
        <img className="RightArrow" src="/assets/arrow.png" alt="" />
      </div>
    </div>
  );
}

export default Designation;
