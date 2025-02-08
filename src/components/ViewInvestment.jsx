import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../ApiClient/apiClient";
import { toast } from "react-toastify";
import { DateTime } from "luxon";

const Viewinvestment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [investmentDetails, setInvestmentDetails] = useState({});

  const handleDeleteInvestment = async () => {
    try {
      const token = localStorage.getItem("token"); // Ensure token is retrieved before use
      const response = await apiClient.delete(
        `/investment/deleteinvestment/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Optionally, check the response to confirm the deletion
      if (response.status === 200) {
        toast.success("Deleted successfully", { onClose: 3000 });
        navigate("/investment");
      } else {
        // Handle failure (optional)
        console.error("Failed to delete investment");
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error deleting investment:", error);
    }
  };

  useEffect(() => {
    const getInvestment = async () => {
      try {
        const response = await apiClient.get(
          `/v1/investment/investmentdetails/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.status === 200) {
          setInvestmentDetails(response.data.data);
        } else {
          toast.error("Error: Network error", { onClose: 3000 });
        }
      } catch (error) {
        console.error("Error fetching investment details:", error);
      }
    };

    if (id) {
      getInvestment();
    }
  }, [id]);

  return (
    <div className="relative bg-gray-100 h-auto min-h-screen p-3 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <div className="flex mb-6">
        <h1 className="text-lg font-semibold">Investment Details</h1>
      </div>
      <div className="flex-shrink-0 w-full h-24 bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-xl shadow-md">
        <div className="text-left text-white">
          <p>Investmant balance</p>
          <p className="text-3xl mt-4">₦{investmentDetails?.totalBalance}.00</p>
        </div>
      </div>
      <div className="mt-6 text-xl flex flex-col gap-4 text-left">
        <p>Interest: ₦{investmentDetails?.interest}</p>
        <p>Duration: {investmentDetails?.duration}</p>
        <p>
          Maturity Date:{" "}
          {investmentDetails?.maturityDate
            ? DateTime.fromISO(investmentDetails.maturityDate).toFormat(
                "dd MMM yyyy"
              )
            : ""}
        </p>
      </div>

      <button
        className="bg-red-600 w-full text-white mt-12 py-2 px-2 rounded-lg"
        onClick={handleDeleteInvestment}
      >
        Delete Investment
      </button>
    </div>
  );
};

export default Viewinvestment;
