import React from "react";
import "./Intro.css";

import Github from "../../images/github.png";
import LinkedIn from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";

import Vector1 from "../../images/Vector1.png";
import Vector2 from "../../images/Vector2.png";
import Me from "../../images/me.png";

import FloatingIcons from "../FloatingIcons/FloatingIcons";
import Crown from "../../images/crown.png";
import Thumbup from "../../images/thumbup.png";
import Glassesimoji from "../../images/glassesimoji.png";

import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-about">
          <h1>Hy! I Am </h1>
          <span>Anshul Mankotia</span>
          <p>
            Frontend Develpoer with hish level of experience in web designing
            and developement,
            <br /> producting the Quality work
          </p>

          <button className="button i-button">Hire me</button>

          <div className="i-icons">
            <a href="https://github.com/AnshulMankotia">
              {" "}
              <img src={Github} alt="" />{" "}
            </a>
            <img src={LinkedIn} alt="" />
            <a href="https://www.instagram.com/i_m_anshulmankotia97/">
              {" "}
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="i-right">
        <img id="vector1" src={Vector1} alt="" />
        <img id="vector2" src={Vector2} alt="" />
        <img id="me" src={Me} alt="" />

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesimoji}
          alt=""
        />

        {/*here we  import FloatingIcons from FloatingIcons.jsx bcz we have two similiar styled floating icon divs so no need to form extra component for this and also we use props in it that we will use in  FloatingIcons.jsx as prop */}
        <motion.div
         initial={{ left: "80%" }}
         whileInView={{ left: "60%" }}
         transition={transition}
        style={{ position: "absolute", top: "-11%", left: "58%" }}
        className="floating-div"
        >
          <FloatingIcons image={Crown} txt1={"Web"} txt2={"Developer"} />
        </motion.div>

        <motion.div
         initial={{ left: "6%" }}
         whileInView={{ left: "-24%" }}
         transition={transition}
         style={{ position: "absolute", top: "69%", left: "-23%" }}
         className="floating-div"
         >
          <FloatingIcons
            image={Thumbup}
            txt1={"Best Design"}
            txt2={"Developement"}
          />
        </motion.div>

        {/* putting background blur effect blur effect to the background of floating icons */}

        <div className="blur"> </div>
        <div
          className="blur"
          style={{ background: "#0bcff7", top: "63%", left: "-24%" }}
        >
          {" "}
        </div>
      </div>
    </div>
  );
};

export default Intro;
