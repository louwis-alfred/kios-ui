import React from "react";

const Notice = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-8">
      {/* Warning Box */}
      <div className="bg-white rounded-lg shadow-xl p-10 w-[30rem] text-center border-t-8 border-blue-900">
        {/* Warning Header */}
        <h2 className="text-3xl font-extrabold text-red-600 mb-4">
          <span className="text-4xl">! WARNING !</span>
        </h2>

        {/* Main Message */}
        <p className="text-2xl font-bold text-blue-900 mt-4 mb-6">
          THIS KIOSK ONLY ACCEPTS EXACT AMOUNT
        </p>

        {/* Explanation */}
        <p className="text-lg text-gray-700 mt-4 mb-8 mx-4">
          In case the user inputs an amount that exceeds the allowed limit, the
          excess amount will be directly deducted from your remaining balance.
        </p>

        {/* Footer Branding */}
        <div className="mt-8 font-bold text-gray-600 text-xl">
          <span className="text-yellow-500">Ki</span>Shier
        </div>

        {/* Bottom Separator */}
        <div className="mt-2 w-full h-2 bg-blue-900"></div>
      </div>
    </div>
  );
};

export default Notice;