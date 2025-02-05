import React, { useState } from "react";
import FooterNavigation from "../../components/FooterNavigation";
import HamburgerMenu from "../../components/HamburgerMenu";
import { FaCopy } from "react-icons/fa";

export default function SavingsDashboard() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(accountDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Tooltip disappears after 2s
  };

  const accountDetails = {
    name: "Clinton John",
    accountNumber: "0123456789",
  };

  const savingPlans = [
    {
      name: "Gold",
      returnRate: "27% return",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Silver",
      returnRate: "23% return",
      color: "from-gray-300 to-gray-500",
    },
    {
      name: "Platinum",
      returnRate: "30% return",
      color: "from-purple-400 to-purple-700",
    },
  ];

  const portfolioData = [
    {
      name: "Your total savings portfolio",
      amount: "N100,000",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-3">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <HamburgerMenu />
        <div className="flex items-center space-x-4">
          <span className="text-gray-800 text-lg font-semibold">
            Hello, Lotanna.
          </span>
          <button className="relative text-gray-800">
            <i className="fas fa-bell"></i>
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Savings Portfolio Section */}
      <div className="mb-6">
        <div className="flex  overflow-x-auto space-x-3 scrollbar-hide">
          {portfolioData.map((portfolio, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[93%] bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-lg shadow-md"
            >
              <h3 className="text-sm mb-2 text-white font-semibold">
                {portfolio.name}
              </h3>
              <div className="flex items-center justify-between gap-2">
                <p className="text-2xl text-white font-bold my-2">
                  {portfolio.amount}
                </p>
                <button className="bg-white text-xs text-blue-700 px-2 py-2 rounded-lg font-semibold">
                  Save More
                </button>
              </div>
            </div>
          ))}
          <div className="flex-shrink-0 w-[93%] bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-lg shadow-md">
            <h3 className="text-sm mb-2 text-white font-semibold">
              {accountDetails.name}
            </h3>
            <div className="flex items-center justify-between gap-2">
              <p className="text-2xl text-white font-bold my-2">
                {accountDetails.accountNumber}
              </p>
              <div className="relative">
                <button
                  className="bg-white text-xs text-blue-700 px-2 py-2 rounded-lg font-semibold"
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
      </div>

      <div className="flex-shrink-0 w-full mb-4 bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-lg shadow-md">
        <h3 className="text-sm text-center text-white font-semibold">
          Withdraw
        </h3>
      </div>

      {/* Saving Plans Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Saving Plans</h2>
          <button className="text-blue-600 text-sm font-semibold">
            See All →
          </button>
        </div>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {savingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-48 h-40 bg-gradient-to-r  ${plan.color} text-white rounded-2xl flex flex-col justify-center shadow-md max-w-28`}
            >
              {/* <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                <span className="text-lg text-gray-800 font-bold">
                  {plan.name[0]}
                </span>
              </div> */}
              <div className="-mt-20 ml-4">
                <h3 className="font-semibold text-white">{plan.name}</h3>
                <p className="text-sm text-grey">{plan.returnRate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Savings Guide Section */}
      <div className="mb-20">
        <h2 className="text-lg font-bold mb-4">Savings Guide</h2>
        <div className="bg-white rounded-lg p-4 shadow-md mb-1.5">
          <h3 className="font-semibold text-gray-800">Basic type of savings</h3>
          <p className="text-gray-600 text-sm mt-2">
            The Basic Savings Plan is designed to provide a simple and effective
            tool for individuals to track their...
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h3 className="font-semibold text-gray-800">Basic type of savings</h3>
          <p className="text-gray-600 text-sm mt-2">
            The Basic Savings Plan is designed to provide a simple and effective
            tool for individuals to track their...
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  );
}
