import React from "react";
import "./Works.css";
import Upwork from "../../images/Upwork.png";
import Fiverr from "../../images/fiverr.png";
import Amazon from "../../images/amazon.png";
import Shopify from "../../images/Shopify.png";
import Facebook from "../../images/Facebook.png";
import {motion} from 'framer-motion'
const Works = () => {
  return (
    <div className="works">
      {/* left side */}
      <div className="s-left">
        <h1>Works for ALl these </h1>
        <span>Brands & Clients</span>
        <p>
          Website design and development: I can create visually appealing and
          user-friendly websites that are optimized for different devices and
          platforms.{" "}
        </p>
        <br />
        <p>
          Server-side development: Full stack developers can work on the
          back-end of web development, including server-side scripting, database
          management, and server configuration.
        </p>
        <button className="button s-button">Download CV</button>
      </div>
      {/* right side */}

      <div className="w-right">

        <motion.div 
        initial={{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{margin:"-40px"}}
        transition={{duration:4,type:'spring'}}
        className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Upwork} alt="" />  
            </div>
            <div className="w-secCircle">
              <img src={Fiverr} alt="" />  
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />  
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt="" />  
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />  
            </div>
        </motion.div>

        {/* background circle */}
        <div className="w-backcircle blueCircle"></div>
        <div className="w-backcircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
