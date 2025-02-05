import React from "react";
import FormInput from "../components/FormInput";

const PersonalDetails = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-3">
      <div className="flex mb-6">
        <h1 className="text-lg font-semibold">Personal Details</h1>
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex-shrink-0 w-[46%] h-36 bg-gradient-to-r bg-white border border-blue-800 p-2 text-white rounded-2xl shadow-md"></div>
      </div>
      <div className="mt-4 font-semibold text-xl">
        <p>Basic Information</p>
      </div>
      <div className="mt-4 font-md text-xs mb-2">
        <p>Set up your name and contact details in simple step</p>
      </div>
      <div className="flex flex-col gap-3 sm:gap-2">
        <FormInput 
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            required
            readOnly
        />
        <FormInput 
            id="lastName"
            type="text"
            placeholder="Enter your first name"
            required
            readOnly
        />
        <FormInput 
            id="Email"
            type="text"
            placeholder="Enter your first name"
            required
            readOnly
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
