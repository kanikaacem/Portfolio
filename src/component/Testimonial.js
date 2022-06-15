import { TestimonialData } from "./data";
function Testimonial() {
  return (
    <div className="TestimonialContainer" id="TestimonialContainer">
      <h2 className="TestimonialHeading"> Testimonials</h2>

      <div className="Container">
        {TestimonialData.map((data) => {
          return (
            <div
              className={
                data.featured ? "TestimonialItem Featured" : "TestimonialItem"
              }
            >
              <div className="Top">
                <img src={data.arrow} className="rightArrow" alt=""></img>
                <img src={data.personImage} className="Person" alt=""></img>
                <img src={data.logo} className="Youtube" alt=""></img>
              </div>
              <div className="Center">{data.data}</div>
              <div className="bottom">
                <h4 className="PersonName"> {data.userName} </h4>
                <h5 className="PersonDesignation">{data.designation}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;
