import React from "react";
import FormInput from "../components/FormInput";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/userAtom";

const PersonalDetails = () => {
  const [user] = useRecoilState(userAtom);
  return (
    <div className="bg-gray-100 min-h-screen p-3 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <div className="flex mb-6">
        <h1 className="text-lg font-semibold">Personal Details</h1>
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex-shrink-0 w-[46%] h-36 bg-gradient-to-r bg-white border border-blue-800 p-2 text-white rounded-2xl shadow-md">
          <div className="text-6xl font-semibold p-4">{`${user?.firstName.charAt(0) + user?.lastName.charAt(0)}`}</div>
        </div>
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
          value={user?.firstName}
          required
          readOnly
        />
        <FormInput
          id="lastName"
          type="text"
          placeholder="Enter your first name"
          value={user?.lastName}
          required
          readOnly
        />
        <FormInput
          id="Email"
          type="text"
          placeholder="Enter your first name"
          value={user?.email}
          required
          readOnly
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
