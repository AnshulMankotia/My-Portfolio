
import "./Intro.css";
import boy from "../..//images/me.png";
import Github from "../../images/github.png";
import LinkedIn from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Anshul Mankotia</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work.
            I am able to design and develope complete web solutions that meet the needs of my clients.
            Whether it's building a new application from the ground up or optimizing and maintaining an existing one, I have the skills and expertise to get the job done.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/AnshulMankotia"> <img src={Github} alt="" /></a> 
          <img src={LinkedIn} alt="" />
          <a href="https://www.instagram.com/i_m_anshulmankotia97/"> <img src={Instagram} alt="" /></a> 
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
       
        <img src={boy} alt="" />
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;