import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Programming</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
            Always prefer to introduce myself as a "Learner" rather than an Expert. I believe - "Everyday life is like programming. If we love something we can put beauty in it!" - and that's what am always doing what I love the most - "Programming". I enjoy the intricacies, details, and depth of pure mathematics and the excitement of solving problems. 
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
