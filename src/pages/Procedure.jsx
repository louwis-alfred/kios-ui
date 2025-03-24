import React from "react";

const Procedure = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-8">
      {/* Card Container */}
      <div className="bg-white rounded-lg shadow-xl p-10 w-[36rem] text-center border-t-8 border-blue-900">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-blue-900">
          <span className="text-5xl">4</span> STEPS TO <br /> USE KISHIER
        </h2>

        {/* Steps List */}
        <div className="mt-8 space-y-6 text-left">
          <Step number="1" title="INPUT YOUR STUDENT NUMBER">
            Type in your student number to start the transaction.
          </Step>

          <Step number="2" title="SELECT THE REMAINING BALANCE YOU WANT TO PAY">
            Select one option displayed on the screen that you wish to pay for.
          </Step>

          <Step number="3" title="INSERT THE EXACT AMOUNT">
            Insert the exact and right amount right below the screen tablet.
          </Step>

          <Step
            number="4"
            title="WAIT FOR THE TRANSACTION TO PROCESS AND FOR YOUR RECEIPT"
          >
            Get your official receipt before leaving the kiosk.
          </Step>
        </div>

        {/* Footer */}
        <div className="mt-8 font-bold text-gray-600 text-xl">
          <span className="text-yellow-500">Ki</span>Shier
        </div>

        {/* Bottom Line */}
        <div className="mt-2 w-full h-2 bg-blue-900"></div>
      </div>
    </div>
  );
};

// Step Component
const Step = ({ number, title, children }) => {
  return (
    <div className="flex items-start space-x-4">
      {/* Step Number */}
      <div className="bg-blue-900 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl font-bold">
        {number}
      </div>

      {/* Step Text */}
      <div>
        <p className="text-blue-900 font-bold text-lg">{title}</p>
        <p className="text-gray-700 text-base mt-1">{children}</p>
      </div>
    </div>
  );
};

export default Procedure;