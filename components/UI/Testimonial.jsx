import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">Recommendations</h4>

            <Slider {...settings}>
            
             <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/client-02.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Alex Choong</h6>
                    <h6>CEO & Business Developer, Webdorks Pte. Ltd.</h6>
                    <p>
                    For reference: +6587535902
                    </p>
                  </div>
                </div>

                <p>
                Responsive and cordial communications with our clients. Takes initiative and has been supporting our scope of work for graphic logo design since our company's inception. Great team member!
                </p>
              </div> 
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/client-01.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Shafayet Siddiquee</h6>
                    <h6>CEO & Founder, Codeinflect Lmt.</h6>
                     <p>
                    For reference: +8801313354303
                    </p>
                  </div>
                </div>

                <p>
                He is very professional and passionate. I would must recommend him for any specialized project.
                </p>
           
              </div>

              

            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
