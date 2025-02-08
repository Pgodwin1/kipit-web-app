import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../ApiClient/apiClient";
import { FaPiggyBank } from "react-icons/fa6";
import DeleteSavingsModal from "./modal/DeleteSavingsModal";
import { DateTime } from "luxon";
import { GoPlusCircle } from "react-icons/go";
import { FaMinusCircle } from "react-icons/fa";
import AddMoney from "./AddMoney";

const ViewSavings = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [savingsData, setSavingsData] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getSavings = async () => {
      try {
        const response = await apiClient.get(`v1/savings/savingsbyid/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setSavingsData(response.data.data);
        }
      } catch (e) {
        throw new Error("server error: " + e.message);
      }
    };

    if (id) {
      getSavings();
    }
  }, [id, token]);

  const handleDelete = async () => {
    const response = await apiClient.delete("/v1");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-3 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <div className="text-lg font-semibold mb-8 text-left">
        <h1 className="mr-2">{savingsData?.name}</h1>
      </div>
      <div className="flex-shrink-0 w-full bg-[#101c4e] p-2 text-white rounded-lg shadow-md">
        <div className="flex justify-center py-3 px-4">
          <i className="fas fa-piggy-bank text-white text-4xl"></i>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <FaPiggyBank />
        <p className="text-sm">save as you want</p>
      </div>
      <p className="text-2xl text-center font-semibold mt-3">
        ₦{savingsData?.amount}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        <div className="flex-shrink-0 w-[45%] bg-gray-400 p-2 text-white rounded-lg shadow-md">
          <div
            className="flex justify-evenly items-center"
            onClick={() =>
              navigate("/addmoney", { state: { savingsData: savingsData } })
            }
          >
            <GoPlusCircle size={20} />
            <p className="text-black cursor-pointer">Add Money</p>
          </div>
        </div>
        <div className="flex-shrink-0 w-[45%] bg-gray-400 p-2 text-white rounded-lg shadow-md">
          <div
            className="flex justify-evenly items-center"
            //   onClick={() => navigate("/create-savings")}
          >
            <FaMinusCircle size={20} />
            <p className="text-black cursor-pointer">Withdraw</p>
          </div>
        </div>
        <div className="flex-shrink-0 w-[45%] bg-gray-400 p-2 text-white rounded-lg shadow-md">
          <div
            className="flex justify-evenly items-center"
            onClick={() => {
              setIsDelete(true);
            }}
          >
            <FaMinusCircle size={20} />
            <p className="text-black cursor-pointer mr-8">Delete</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-red-500">
          Maturity date:{" "}
          {savingsData?.maturityDate
            ? DateTime.fromISO(savingsData.maturityDate).toFormat("dd MMM yyyy")
            : ""}
        </p>
        <p className="mt-8">Interest earned: {savingsData?.interest}</p>
      </div>
      {isDelete && (
        <DeleteSavingsModal
          handleDelete={handleDelete}
          setIsDelete={setIsDelete}
        />
      )}
    </div>
  );
};

export default ViewSavings;
