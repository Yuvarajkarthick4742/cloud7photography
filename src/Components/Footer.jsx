import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Link } from "react-router-dom";
import { TfiTwitter } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuYoutube } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-lg-start bg-primary text-muted text-white

"
    >
      <section
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-white

"
      >
        <div
          className="me-5 d-none d-lg-block text-white

"
        >
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to="#" className="me-4 text-reset">
            <TfiTwitter />
          </Link>
          <Link to="https://wa.me/8270905222" className="me-4 text-reset">
            <FaWhatsapp />
          </Link>
          <Link
            to="mailto:cloud.07photography@gmail.com"
            className="me-4 text-reset"
          >
            <MdOutlineEmail />
          </Link>
          <Link
            to="http://www.youtube.com/@natpuphotography38"
            className="me-4 text-reset"
          >
            <LuYoutube />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <RiFacebookCircleLine />
          </Link>
          <Link
            to="https://www.instagram.com/cloud_7photography?utm_source=qr&igsh=MTM5YjN3czU3ZWhvYg=="
            className="me-4 text-reset"
          >
            <FaInstagram />
          </Link>
        </div>
      </section>

      <section
        className="mt-5 text-white

"
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>--Cloud7 PhotoGraphy--
              </h6>
              <p>
                "At our studio, every stroke tells a story, weaving together the
                threads of creativity into a tapestry of boundless imagination."
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/" className="text-reset">
                  Home
                </Link>
              </p>

              <p>
                <Link to="/About" className="text-reset">
                  About
                </Link>
              </p>

              <p>
                <Link to="/Review" className="text-reset">
                  Review
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/Bookus" className="text-reset">
                  Bookus
                </Link>
              </p>

              <p>
                <Link to="/Films" className="text-reset">
                  Films
                </Link>
              </p>

              <p>
                <Link to="/Help" className="text-reset">
                  Help
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i>Cloud7
                Photography,TELC teacher training opp,Usilampatti.
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                cloud.07photography@gmail.com
              </p>

              <p>
                <i className="fas fa-print me-3"></i>+91 82709 05222
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 text-white

"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Yuvaraj karthick.com
        </a>
      </div>
    </MDBFooter>
  );
};
export default Footer;