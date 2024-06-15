import React from "react";
import R1 from "../review/re1.jpg";
import R2 from "../review/re2.jpg";
import R3 from "../review/re3.jpg";
import R4 from "../review/re4.jpg";
import R5 from "../review/re5.jpg";
import R6 from "../review/re6.jpg";
import R8 from "../review/re8.jpg";
import R9 from "../review/re9.jpg";
import R10 from "../review/re10.jpg";

import Image from "react-bootstrap/Image";
const GroupExample = () => {
  const imageStyle = {
    borderRadius: "50%",
    width: "100%",
    height: "auto"
  };
  return (
    <div className="container-fluid row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card ">
          <Image src={R1} style={imageStyle} alt="Fisrt" />
          <div className="card-body">
            <h5 className="card-title text-center fst-italic fs-6 fw-bold">
              ---Vignesh & Sowmi---
            </h5>
            <p
              className="card-text text-center fst-italic fs-6"
              data-aos="flip-right"
            >
              "Your photo studio's attention to detail is impressive, capturing
              the unique essence of each couple. Our photos reflect the joy and
              love we share wonderfully.We had an amazing experience at your
              studio! The skilled photography resulted in stunning images that
              beautifully capture the magic of our special moments together."
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card ">
          <Image src={R2} style={imageStyle} alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fst-italic fs-6 fw-bold">
              ---Bharath & Gowsika---
            </h5>

            <p
              className="card-text text-center fst-italic fs-6 "
              data-aos="flip-right"
            >
              Here are two lines of feedback for
              <mark> Cloud7 Photography studio</mark>: "Exceptional experience at
              the photo studio! The skilled team captured our special moments
              with artistic precision, delivering photos that exceeded our
              expectations.Outstanding service at the photo studio! The
              professional and friendly staff created a comfortable atmosphere,
              resulting in beautiful, high-quality photos that truly captured
              the essence of our relationship."
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card ">
          <Image src={R3} style={imageStyle} alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fst-italic fs-6 fw-bold">
              --Siva & Priya--
            </h5>
            <p
              className="card-text text-center fst-italic fs-6"
              data-aos="flip-right"
            >
              "We're overjoyed with the gorgeous photos from the studio! The
              team's skill and creativity transformed our moments into something
              truly beautiful, and we couldn't be happier.The studio's ability
              to capture the beauty in ordinary moments is truly remarkable. The
              photos are not just pictures; they're a reflection of the team's
              talent and dedication, and we're absolutely in love with them."
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <Image src={R4} style={imageStyle} alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fst-italic fs-6 fw-bold">
              --Akilan & Swetha--
            </h5>
            <p
              className="card-text text-center fst-italic fs-6"
              data-aos="flip-right"
            >
              "Natpu Photo Studio, you've truly captured the essence of our love
              story with unparalleled attention to detail. Each photograph
              reflects the genuine joy and connection we share, creating
              timeless memories that we'll cherish forever. Our experience at
              your studio was nothing short of magical.""
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card ">
          <Image src={R5} style={imageStyle} alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fst-italic fs-6 fw-bold">
              --Ram & kowsi--
            </h5>
            <p
              className="card-text text-center fst-italic fs-6"
              data-aos="flip-right"
            >
              "Natpu Photo Studio, your commitment to perfection shines through
              in every shot. The unique details, the genuine emotions, and the
              sheer artistry in your photography have given our memories a life
              of their own. Our experience with your studio was beyond
              exceptional; it was a journey of storytelling through images."
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card ">
          <Image src={R6} style={imageStyle} alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fst-italic fs-6 fw-bold">
              --Siddhu & Shalini--
            </h5>
            <p
              className="card-text text-center fst-italic fs-6"
              data-aos="flip-right"
            >
              Natpu Photo Studio, your expertise and dedication to your craft
              have left an indelible mark on our hearts. The attention to detail
              in every photograph is a testament to your passion for capturing
              not just images, but the very soul of our love story. Our journey
              with your studio was nothing short of enchanting.
            </p>
          </div>
        </div>
      </div>
     
      <div className="col">
        <div className="card ">
          <Image src={R8} style={imageStyle} alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fst-italic fs-6 fw-bold">
              --Ram & Ruthi--
            </h5>
            <p
              className="card-text text-center fst-italic fs-6"
              data-aos="flip-right"
            >
              "Natpu Photo Studio, your work is amazing! You captured the
              essence of our love in every photo. The attention to detail and
              the genuine emotions in each shot made our memories truly special.
              Our experience with your studio was fantastic; the photographers
              turned our moments into beautiful art. Thanks for making our day
              unforgettable!"
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card ">
          <Image src={R9} style={imageStyle} alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fst-italic fs-6 fw-bold">
              ---Gopi & JayaPriya---
            </h5>
            <p
              className="card-text text-center fst-italic fs-6"
              data-aos="flip-right"
            >
              "Natpu Photo Studio, your photography is outstanding! The way you
              captured the little details and genuine emotions made our pictures
              truly special. Our experience at your studio was fantastic, and
              the resulting images beautifully tell the story of our special
              day. Thank you for turning our moments into lasting memories that
              we'll cherish forever!"
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card ">
          <Image src={R10} style={imageStyle} alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fst-italic fs-6 fw-bold">
              ---Venu & Loki---
            </h5>
            <p
              className="card-text text-center fst-italic fs-6"
              data-aos="flip-right"
            >
              "Natpu Photo Studio, we're beyond thrilled with the incredible
              work you've done! Your attention to detail and ability to capture
              genuine emotions have turned our ordinary moments into
              extraordinary memories. Our time at your studio was nothing short
              of amazing. The photos beautifully showcase the magic of our
              special day. Thanks for creating timeless snapshots of our
              happiness!"
            </p>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default GroupExample