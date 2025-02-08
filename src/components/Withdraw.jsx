import React from "react";
import { PiPiggyBankLight } from "react-icons/pi";
import { FaArrowCircleDown } from "react-icons/fa";
import { LuPiggyBank } from "react-icons/lu";
import Spinner from "./Spinner/Spinner";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Withdraw = ({ isLoading }) => {
  return (
    <div className="bg-gray-100 min-h-screen p-3 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <div className="text-lg font-semibold mb-8 text-left">
        <h1>Withdraw</h1>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex justify-between items-center flex-shrink-0 w-full h-12 bg-gray-300 p-2 text-white rounded-md shadow-md">
          <div className="flex-shrink-0 w-[20%] h-8 p-1 bg-[#101c4e] text-white rounded-md shadow-md">
            <i className="fas fa-piggy-bank text-white"></i>
          </div>
          <p className="text-xs font-semibold mr-28">Thein</p>
          <div className="flex justify-between">
            <p className="text-lg font-bold">₦0.00</p>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <FaArrowCircleDown size={50} />
        </div>
        <div className="flex justify-between items-center flex-shrink-0 w-full h-12 bg-gray-300 p-2 text-white rounded-md shadow-md mt-4">
          <div className="flex-shrink-0 w-[20%] h-8 p-1 bg-[#101c4e] text-white rounded-md shadow-md">
            <i className="fas fa-arrow-left text-white mr-1"></i>
            <i className="fas fa-arrow-right text-white ml-1"></i>
          </div>
          <p className="text-xs font-semibold mr-10">Spending account</p>
          <div className="flex justify-between">
            <p className="text-lg font-bold">₦0.00</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around py-3  max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <button
          className="min-w-72 p-2 text-white bg-[#101c4e] rounded-lg"
          //   onClick={handleCreateSavings}
        >
          {isLoading ? (
            <div className="spinner">
              <Spinner />
            </div>
          ) : (
            "Continue"
          )}
        </button>
      </div>
    </div>
  );
};

export default Withdraw;
