import React, { useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import FormInput from "../components/FormInput";
import { IoCalculator } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
import apiClient from "../ApiClient/apiClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateInvestment = () => {
  const navigate = useNavigate()
  const [isLoading, setIsloading] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [investmentData, setInvestmentData] = useState({
    duration: 3,
    amount: "",
  });
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(accountDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Tooltip disappears after 2s
  };

  const accountDetails = {
    bank: "Moniepoint Microfinance Bank",
    name: "Kipit Technology Limited",
    accountNumber: "6647425205",
  };
  const durationOptions = [6, 12];

  const validateForm = () => {
    const duration = investmentData.duration;
    const amount = investmentData.amount;

    if (!durationOptions.includes(duration)) {
      setValidationError("Please select a valid duration (6, or 12 months).");
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setValidationError("Amount must be a positive number.");
      return false;
    }

    setValidationError("");
    return true;
  };

  const handleCreateInvestment = async (e) => {
    e.preventDefault();
    setIsloading(true)
    if (validateForm()) {
      const token = localStorage.getItem("token");
      const response = await apiClient.post(
        "/v1/investment/createInvestment",
        {
          duration: investmentData.duration,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("res", response);
      if (response.status === 201) {
         toast.success("Password changed successfully!", { autoClose: 3000 });
         navigate('/investments')
         setIsloading(false)
      }
    }
  };

  const handleSelectDuration = (duration) => {
    setInvestmentData((prev) => ({ ...prev, duration: Number(duration) }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setInvestmentData({
      ...investmentData,
      [id]: value,
    });
  };

  return (
    <div className="relative bg-gray-100 h-auto min-h-screen p-3 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <div className="flex ">
        <h1 className="text-lg font-semibold">Start new investment</h1>
      </div>
      <div className="flex-shrink-0 w-full h-36 bg-gradient-to-r bg-[#101c4e] mt-4 p-2 text-white rounded-xl shadow-md">
        <div className="text-left gap-2">
          <p className="text-white">Bank: {accountDetails.bank}</p>
          <p className="text-white">Name: {accountDetails.name}</p>
          <div className="flex items-center gap-6">
            <p className="text-4xl text-white font-bold mt-4">
              {accountDetails.accountNumber}
            </p>
            <div className="relative">
              <button
                className="text-xl bg-[#FFD700] mt-6 rounded-lg font-semibold"
                onClick={handleCopy}
              >
                <FaCopy />
              </button>
              {copied && (
                <span className="absolute top-[-30px] right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  Copied!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex gap-2.5 mt-2">
          {durationOptions.map((du, index) => (
            <div
              key={index}
              onClick={() => handleSelectDuration(Number(du))}
              className={`flex-shrink-0 w-[30%] h-24 ${
                investmentData.duration === du ? "bg-blue-600" : "bg-[#101c4e]"
              } p-2 text-white rounded-xl shadow-md cursor-pointer`}
            >
              <div className="flex flex-col items-center">
                <h3 className="text-4xl text-[#FFD700] font-semibold">{du}</h3>
                <p className="text-md text-white font-bold my-2">Months</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 mb-4">
        <FormInput
          id={"amount"}
          type={"text"}
          placeholder={"Amount to deposit(₦0.00)"}
          onChange={handleChange}
          value={investmentData.amount}
          required
        />
      </div>

      <div className="absolute bottom-40 right-0 left-0">
        <p>₦0.00</p>
        <div className="flex justify-center items-center text-center">
          <IoCalculator />
          <p>Calculate interest</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around py-3  max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <button
          className="min-w-72 p-2 text-white bg-[#101c4e] rounded-lg"
          onClick={handleCreateInvestment}
        >
          {isLoading ? (
            <div className="spinner">
              <Spinner />
            </div>
          ) : (
            "Next"
          )}
        </button>
      </div>
    </div>
  );
};

export default CreateInvestment;
