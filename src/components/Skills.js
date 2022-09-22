import nuxt2 from "../assets/img/nuxt2.png";
import nodejs from "../assets/img/nodejs.png";
import next from "../assets/img/next4.png";
import mongodb from "../assets/img/mongodb2.png";
import postgre from "../assets/img/postgre.png";
import graphql from "../assets/img/graphql.png";
import docker from "../assets/img/docker.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>In order to making an interactive websites, I use some of the tech behind it.<br></br> Some of these tech include the following</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={next} alt="Image" />
                                <h5>React.js / React Native / Next.js</h5>
                            </div>
                            <div className="item">
                                <img src={nuxt2} alt="Image" />
                                <h5>Vue.js / Nuxt2.js</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={postgre} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={graphql} alt="Image" />
                                <h5>GraphQL</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
