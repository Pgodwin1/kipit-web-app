import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const FooterNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around py-3">
      <button
        className={`${
          location.pathname === "/dashboard" ? "text-blue-600" : "text-gray-400"
        }`}
        onClick={() => navigate("/dashboard")}
      >
        <i className="fas fa-home"></i>
        <p className="text-xs">Home</p>
      </button>
      <button
        className={`${
          location.pathname === "/savings" ? "text-blue-600" : "text-gray-400"
        }`}
        onClick={() => navigate("/savings")}
      >
        <i className="fas fa-piggy-bank"></i>
        <p className="text-xs">Savings</p>
      </button>
      <button
        className={`${
          location.pathname === "/investment"
            ? "text-blue-600"
            : "text-gray-400"
        }`}
        onClick={() => navigate("/investment")}
      >
        <i className="fas fa-chart-bar"></i>
        <p className="text-xs">Investment</p>
      </button>
      <button
        className={`${
          location.pathname === "/account" ? "text-blue-600" : "text-gray-400"
        }`}
        onClick={() => navigate("/account")}
      >
        <i className="fas fa-user"></i>
        <p className="text-xs">Account</p>
      </button>
    </div>
  );
};

export default FooterNavigation;
