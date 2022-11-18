import React, {useState, useEffect} from 'react'

const Slider = () => {

     const [index, setIndex] = useState(0);
     const [index1, setIndex1] = useState(1);

     const [transL, setTransL] = useState(false);
     const [transR, setTransR] = useState(false);

     useEffect(() => {
       if (transL) {
         setTimeout(() => {
           setTransL(false);
           setIndex((index + 1) % slider.length);
           setIndex1((index1 + 1) % slider.length);
         }, 800);
       }
     }, []);

     const slider = [
       "me1.jpg",
       "pic2.jpg",
       "pic3.jpg",
       "pic4.jpg",
       "pic5.jpg",
       "pic6.jpg",
     ];

     const handlePrev = () => {};
     const handleNext = () => {
       setTransL(true);
       setTransR(false);
     };

  return (
    <>
      <div className="slide_bg flex justify-center space-x-4 mt-4 ">
        <button className="slide_button" onClick={handlePrev}>
          {"<"}{" "}
        </button>
        <div className="relative w-96  z-20 h-56 overflow-hidden rounded-xl">
          <img
            className={`absolute object-contain z-20 w-full h-full p-4 ${
              transL
                ? "transition duration-500 ease-linear -translate-x-full"
                : ""
            }`}
            src={slider[index]}
            alt=""
          />

          <img
            className={`absolute object-contain z-0 w-full h-full p-4 
                
                ${transL ? "animate-slideR" : ""}`}
            src={slider[index1]}
            alt=""
          />
        </div>
        <button className="slide_button" onClick={handleNext}>
          {">"}{" "}
        </button>
      </div>
    </>
  );
}

export default Slider