import React from "react";
import FooterNavigation from "../components/FooterNavigation";
import avater from "../img/avater.jpg"
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/userAtom";

export default function UserProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);

  const handleDelete = () => {
    setUser({});
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r bg-[#101c4e] text-white px-6 py-8 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-white font-bold">My Profile</h1>
          <button className="text-white">
            <i className="fas fa-qrcode text-white"></i>
          </button>
        </div>
        <div className="flex items-center mt-6">
          <img
            src={avater}
            alt="Profile"
            className="w-16 h-16 rounded-full border-4 border-white"
          />
          <div className="ml-4">
            <h2 className="text-lg text-white font-semibold">{`${user?.firstName.charAt(0)}, ${user?.lastName}`}</h2>
            <p className="text-sm text-white font-md">{user?.phoneNumber}</p>
            <p className="text-sm text-white font-md">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="flex-1 bg-gray-100 shadow-lg pt-8 px-6">
        <ul className="space-y-6">
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <i className="fas fa-user text-orange-500"></i>
              <span
                className="text-gray-800 font-inter font-semibold"
                onClick={() => navigate("/personal-details")}
              >
                Personal Details
              </span>
            </div>
            <i className="fas fa-chevron-right text-gray-400"></i>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <i className="fas fa-lock text-orange-500"></i>
              <span
                className="text-gray-800 font-semibold"
                onClick={() => navigate("/change-password")}
              >
                Privacy & Security
              </span>
            </div>
            <i className="fas fa-chevron-right text-gray-400"></i>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <i className="fas fa-gift text-orange-500"></i>
              <span className="text-gray-800 font-semibold">
                Offers & Rewards
              </span>
            </div>
            <i className="fas fa-chevron-right text-gray-400"></i>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <i className="fas fa-question-circle text-orange-500"></i>
              <span className="text-gray-800 font-semibold">Help</span>
            </div>
            <i className="fas fa-chevron-right text-gray-400"></i>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <i className="fas fa-sign-out-alt text-orange-500"></i>
              <span
                className="text-gray-800 font-semibold"
                onClick={handleDelete}
              >
                Logout
              </span>
            </div>
            <i className="fas fa-chevron-right text-gray-400"></i>
          </li>
        </ul>
      </div>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  );
}
