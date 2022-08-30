import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Naim Siddiqui</h2>
              <h5 className="mb-4">Full-Stack Developer</h5>
              <p>
              Expertise in JS, TS, ES6, React, Redux, React Native, Next.js, Node.js, Express.js, Rest API, MongoDB, Firebase,
              Tailwind, Bootstrap, MUI, GraphQL, Google API, SASS, Payment Gateway, WordPress, AWS, Vue.js, MySQL, Python, Django
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="https://api.whatsapp.com/send?phone=8801643471297">Hire me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://drive.google.com/file/d/1bjh-rpu6ZkcVdZ_3Cn4atiahdOX4b4pO/view?usp=sharing">Download CV</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
