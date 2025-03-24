import React from "react";
import avatar from "../assets/avatar.png";

const Profile = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-950 p-4">
      <div className="bg-gray-200 rounded-xl p-8 w-96 shadow-lg">
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={avatar}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-gray-400"
          />
          <h2 className="text-2xl font-bold text-blue-900 mt-4">
            DELA CRUZ, JUAN C.
          </h2>
          <p className="text-base text-gray-700 mt-1">25-XXX123</p>
          <p className="text-base text-gray-700">LRN: 123456789</p>
          <p className="text-base text-gray-600 mt-1">Senior High School Department</p>
        </div>

        {/* Remaining Balance Section */}
        <h3 className="text-lg font-bold text-blue-900 mb-3">
          Remaining Balance
        </h3>

        <div className="space-y-3">
          <BalanceItem label="Intramurals" amount="700" />
          <BalanceItem label="5th Payment" amount="900" />
          <BalanceItem label="Christmas Party" amount="150" />
          <BalanceItem label="Retreat" amount="2,250" />
        </div>

        <p className="text-sm text-center text-gray-600 mt-6">
          Select balance to pay
        </p>
      </div>
    </div>
  );
};

const BalanceItem = ({ label, amount }) => {
  return (
    <div className="bg-gray-300 text-blue-900 font-semibold text-base p-4 rounded-md text-center shadow-md">
      {label}: ₱{amount}
    </div>
  );
};

export default Profile;