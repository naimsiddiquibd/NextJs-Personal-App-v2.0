import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">I am Ready to talk!</h3>
            <p>
            Let&apos;s gossip to build your Web, Mobile, or Desktop Application
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Dhaka - Bangladesh</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>naimsiddiquibd@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+8801643471297</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://www.youtube.com/c/NaimSiddiquiBD">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="https://github.com/naimsiddiquibd">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.facebook.com/naimsiddiquibd/">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/naim-siddiqui/">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://www.instagram.com/naimsiddiquibd/">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
