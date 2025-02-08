import { useNavigate } from "react-router-dom";
import FooterNavigation from "../components/FooterNavigation";
import { useEffect, useState } from "react";
import { LuPiggyBank } from "react-icons/lu";
import apiClient from "../ApiClient/apiClient";
import { toast } from "react-toastify";

const Savings = () => {
  const [savingsDetails, setSavingsDetails] = useState([]);
  const navigate = useNavigate();
  const savings = [
    {
      name: "Savings balance",
      amount: "50,000",
    },
    {
      name: "Vacation Fund",
      amount: "50,000",
    },
  ];

  useEffect(() => {
    const getSavings = async () => {
      const token = localStorage.getItem("token");
      const response = await apiClient.get("/v1/savings/getpersonalsavings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setSavingsDetails(response.data.data);
      } else {
        toast.error("Error getting savings", { onClose: 3000 });
      }
    };

    getSavings();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-3 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <div className="text-lg font-semibold mb-8 text-left">
        <h1>Savings</h1>
      </div>
      <div className="mb-6">
        <div className="flex  overflow-x-auto space-x-3 scrollbar-hide">
          {savings.map((portfolio, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[93%] bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-lg shadow-md"
            >
              <h3 className="text-sm mb-2 text-white font-semibold text-left">
                {portfolio.name}
              </h3>
              <div className="flex items-center justify-between gap-2">
                <p className="text-2xl text-white font-bold my-2">
                  ₦{portfolio.amount}
                </p>
                {/* <button className="bg-white text-xs text-blue-700 px-2 py-2 rounded-lg font-semibold">
                  Save More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-shrink-0 w-40 bg-gray-400 p-2 text-white rounded-lg shadow-md">
        <div
          className="flex justify-evenly items-center"
          onClick={() => navigate("/create-savings")}
        >
          <i className="fas fa-plus"></i>
          <p className="text-black cursor-pointer">Add Savings</p>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-lg font-semibold text-black text-left">
          My Savings
        </h1>
        <div className="flex flex-col mt-2">
          {savingsDetails?.map((savings, indx) => (
            <div
              key={indx}
              onClick={() => navigate(`/savings/${savings?._id}`)}
              className="flex-shrink-0 w-full mt-2 p-2 border border-gray-400 cursor-pointer text-white rounded-lg shadow-md"
            >
              <div className="flex gap-2">
                <LuPiggyBank />
                <p className="text-xs">{savings?.name}</p>
              </div>
              <p className="text-xl font-semibold text-left mt-3">
                ₦{savings?.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
      <FooterNavigation />
    </div>
  );
};

export default Savings;
