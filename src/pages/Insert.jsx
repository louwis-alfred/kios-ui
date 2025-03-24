import React from "react";
import insertCash from "../assets/cashInsert.png";

const Insert = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-900 p-4">
      <div className="bg-gray-600 rounded-xl p-14 w-96 shadow-lg flex flex-col items-center text-white">
        <img 
          src={insertCash} 
          alt="Insert Money" 
          className="w-40 h-40 mb-6"
          style={{
            filter: "brightness(1.1) drop-shadow(0 0 6px rgba(255, 255, 255, 0.3))",
            mixBlendMode: "screen",  // This helps with light backgrounds
            objectFit: "contain"
          }} 
        />

        <p className="text-xl">Insert exact amount</p>

        <p className="text-3xl font-bold mt-3">Php 700.00</p>
      </div>
    </div>
  );
};

export default Insert;