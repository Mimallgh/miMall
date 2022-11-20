import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const images = [
    "slider/me1.jpg",
    "slider/pic2.jpg",
    "slider/pic3.jpg",
    "slider/pic4.jpg",
    "slider/pic5.jpg",
    "slider/pic6.jpg",
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,

    // prevArrow: (
    //   <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 512 512"
    //       fill="#2e2e2e"
    //     >
    //       <path d="M242 180.6v-138L0 2561242 213.4V331.2h270v180.6z" />
    //     </svg>
    //   </div>
    // ),

    // nextArrow: (
    //   <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 512 512"
    //       fill="#2e2e2e"
    //     >
    //       <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
    //     </svg>
    //   </div>
    // ),
  };

  return (
    <div className="mt-5  bg-[#fb97e0]">
      {/* <h1 className="">hello</h1> */}
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className=" w-screen h-[20rem]">
            <img
              src={each}
              className="w-screen object-cover pt-5 lg:object-cover cursor-pointer  rounded-lg shadow-xl"
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slider;
