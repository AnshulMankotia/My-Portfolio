import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../images/profile1.jpg";
import profilePic2 from "../../images/profile2.jpg";
import profilePic3 from "../../images/profile3.jpg";
import profilePic4 from "../../images/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "I have had the pleasure of working with [Full Stack Developer] on multiple projects and have always been impressed with their technical skills and ability to deliver high-quality code on tight deadlines. They are a true full stack developer, with expertise in both front-end and back-end technologies, and are able to understand and solve complex problems with ease. I highly recommend [Full Stack Developer] for any project requiring a reliable and talented developer.",
    },
    {
      img: profilePic2,
      review:
      "I have worked with many full stack developers over the years, but [Full Stack Developer] stands out as one of the best. They have a rare combination of technical expertise and problem-solving skills that make them an asset to any team. Whether it's working on the front-end or back-end of a project, [Full Stack Developer] is always able to deliver high-quality code that meets the project's requirements. I highly recommend [Full Stack Developer] for any project that requires a talented and reliable developer.",
    },
    {
      img: profilePic3,
      review:
      "As a project manager, it's essential to have a full stack developer on the team who can handle any task that comes their way. [Full Stack Developer] has consistently impressed me with their ability to dive into any project and quickly understand the requirements and technical complexities. They have a strong understanding of both front-end and back-end technologies and are able to deliver high-quality code that meets the project's needs. I highly recommend [Full Stack Developer] for any project that requires a versatile and skilled developer.",
    },
    {
      img: profilePic4,
      review:
      "I have worked with [MERN Developer] on several projects and have always been impressed by their technical skills and attention to detail. They have a strong understanding of the MERN stack and are able to develop high-quality web applications efficiently. In addition to their technical abilities, [MERN Developer] is also a great team player and always willing to share their knowledge with the rest of the team. I highly recommend them for any project that requires MERN development.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <br />
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
