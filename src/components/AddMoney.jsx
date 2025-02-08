import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import Spinner from "./Spinner/Spinner";
import { useLocation } from "react-router-dom";
import apiClient from "../ApiClient/apiClient";

const AddMoney = ({ isLoading }) => {
  const location = useLocation();
  const savingData = location.state?.savingsData;
  const [validationError, setValidationError] = useState([]);
  const [addMoney, setAddMoney] = useState({
    amount: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAddMoney((prev) => ({
      ...prev,
      [id]: id === "amount" ? value.replace(/[^0-9.]/g, "") : value, // Allow only numeric values in amount
    }));
  };

  const handleAddMoney = async () => {
    const amount = addMoney.amount;

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setValidationError("Amount must be a positive number.");
      return false;
    }

    const token = localStorage.getItem("token");
    const response = await apiClient.patch(
      `/v1/savings/fundsavings/${savingData?._id}`,
      { amount: addMoney.amount },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("r", response);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-3 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <div className="text-lg font-semibold mb-3">
        <h1>Add Money</h1>
        <p className="mt-6 text-xs text-center">
          How much would you like to add to this wallet
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center flex-shrink-0 w-full h-12 bg-gray-300 p-2 rounded-md shadow-md">
          <div className="flex-shrink-0 w-[20%] h-8 p-1 bg-[#101c4e] text-white rounded-md shadow-md">
            <i className="fas fa-arrow-left text-white mr-1 mt-1"></i>
            <i className="fas fa-arrow-right text-white ml-1 mt-1"></i>
          </div>
          <p className="text-xs font-semibold mr-10">Spending Acct.</p>
          <div className="flex justify-between">
            <p className="text-lg font-bold">₦0.00</p>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <FaArrowCircleDown size={50} />
        </div>
        <div className="flex justify-between items-center flex-shrink-0 w-full h-12 bg-gray-300 p-2 rounded-md shadow-md mt-4">
          <div className="flex-shrink-0 w-[20%] h-8 p-1 bg-[#101c4e] text-white rounded-md shadow-md">
            <i className="fas fa-piggy-bank text-white"></i>
          </div>
          <p className="text-xs font-semibold mr-28">{savingData?.name}</p>
          <div className="flex justify-between">
            <p className="text-lg font-bold">₦{savingData?.amount}</p>
          </div>
        </div>
        <div className="border-b pl-4 relative flex items-center bg-gray-100 mt-6">
          <span className="text-gray-500 text-2xl font-semibold">₦</span>
          <input
            className="w-full pl-2 text-left text-2xl font-semibold bg-transparent bg-gray-100 focus:outline-none focus:ring-0"
            type="text"
            id="amount"
            placeholder="0.00"
            onChange={handleChange}
            value={addMoney.amount}
            required={true}
          />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around py-3  max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <button
          className="min-w-72 p-2 text-white bg-[#101c4e] rounded-lg"
          onClick={handleAddMoney}
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

export default AddMoney;
