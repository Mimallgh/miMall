import React from "react";


const Socials = ({ Icons }) => {
  return (
    <div className="text-tealt-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex 
        items-center rounded-full bg-gray-700 mx-1.5 text-xl 
        hover:text-gray-100 hover:bg-teal-500 duration-300 "
        >
          <ion-icons name={icon.name}></ion-icons>
        </span>
      ))}
    </div>
  );
};

export default Socials;
