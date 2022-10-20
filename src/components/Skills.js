import javascriptImg from "../assets/img/javascript.png";
import htmlImg from "../assets/img/html.png";
import cssImg from "../assets/img/css.png";
import bootstrapImg from "../assets/img/bootstrap.png";
import reactImg from "../assets/img/react.png";
import gitImg from "../assets/img/github.png";
import phpImg from "../assets/img/php.png";
import sqlImg from "../assets/img/sql.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                These are some of the technologies I know and have worked with.
                <br></br> Even though I have had much contact with some of them,
                I know I probably don't know all of their intricacies -
                developers are in a state of perpetual learning, after all!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={javascriptImg} alt="skill-meter" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={htmlImg} alt="skill-meter" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={cssImg} alt="skill-meter" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={bootstrapImg} alt="skill-meter" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={reactImg} alt="skill-meter" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={gitImg} alt="skill-meter" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={phpImg} alt="skill-meter" />
                  <h5>Php</h5>
                </div>
                <div className="item">
                  <img src={sqlImg} alt="skill-meter" />
                  <h5>SQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
