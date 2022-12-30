import React from 'react'
import './Services.css'
import Card from '../Card/Card'

import Heartemoji from '../../images/heartemoji.png'
import Glassesemoji from '../../images/glasses.png'
import Humbleemoji from '../../images/humble.png'
import {motion} from "framer-motion";


const Services = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="services" id='Services'>
            <div className="s-left">
                <h1>My Awesome </h1>
                <span>services</span>
                <p> As a Full Stack Developer, I am Providing the Best Services and I am agile to<br/> deliver the Projects on time  </p>
                <button className="button s-button">Download CV</button>
            </div>

           
                <div className="cards">
                    {/* First Card */}
                    <motion.div
                    initial={{ left: "35rem" }}
                    whileInView={{ left: "30rem" }}
                    transition={transition}
                    style={{left:'30rem'}}> 
                    <Card
                    emoji={Heartemoji}
                    heading={"Design"}
                    detail={'Figma, Sketch, Photoshop, Abobe, Adobe xd'}
                    button={"Learn More"}
                    />
                    </motion.div>


                    {/* Second Card */}
                    <motion.div
                    initial={{ left: "-2rem" }}
                    whileInView={{ left: "5rem" }}
                    transition={transition}
                
                    style={{top:'15rem',left:'5rem'}}>
                    <Card 
                    emoji={Glassesemoji}
                    heading={"Developer"}
                    detail={'Html, Css, JavaScript, React,  Nodejs, Express, MongoDb'}
                    button={"Learn More"}
                    />
                    </motion.div>

                    {/* third Card */}
                    <motion.div
                    initial={{ left: "35rem" }}
                    whileInView={{ left: "30rem" }}
                    transition={transition}
                    style={{top:'30rem',left:'30rem'}}>
                    <Card 
                    emoji={Humbleemoji}
                    heading={"UI/UX"}
                    detail={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, sapiente.'}
                    button={"Learn More"}
                    />
                    </motion.div>

                    <div className="blur s-blur1" style={{background:'rgb(148 19 226)'}}></div>
                    <div className="blur s-blur2" style={{background:'rgb(11, 207, 247)'}}></div>
                    <div className="blur s-blur3" style={{background:' rgb(236 59 59 / 98%);'}}></div>
                </div>

        </div>
  )
}

export default Services