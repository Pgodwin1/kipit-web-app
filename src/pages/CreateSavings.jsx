import { useState } from "react";
import FormInput from "../components/FormInput";
import apiClient from "../ApiClient/apiClient";
import Spinner from "../components/Spinner/Spinner";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateSavings = () => {
  const navigate = useNavigate()
  const [isLoading, setIsloading] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [savingsInput, setSavingsInput] = useState({
    duration: null,
    frequency: null,
    name: "",
    amount: "",
  });
  const durationOptions = [
    { index: 0, value: 3 },
    { index: 1, value: 6 },
    { index: 2, value: 12 },
  ];

  const frequencyOptions = [
    { index: 0, value: "Daily" },
    { index: 1, value: "Weekly" },
    { index: 2, value: "Monthly" },
  ];

  const validateForm = () => {
    const duration = savingsInput.duration;
    const frequency = savingsInput.frequency;
    const name = savingsInput.name;
    const amount = savingsInput.amount;

    if (!name || name.length < 4) {
      setValidationError("Name must be at least 4 characters long.");
      return false;
    }

    if (
      !durationOptions.some((option) => option.index === savingsInput.duration)
    ) {
      setValidationError("Please select a valid duration.");
      return false;
    }

    if (
      !frequencyOptions.some(
        (option) => option.index === savingsInput.frequency
      )
    ) {
      setValidationError("Please select a frequency.");
      return false;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setValidationError("Amount must be a positive number.");
      return false;
    }

    setValidationError("");
    return true;
  };

  const handleCreateSavings = async (e) => {
    e.preventDefault();
    console.log({
      name: savingsInput.name,
      frequency: savingsInput.frequency,
      duration: savingsInput.duration,
      amount: Number(savingsInput.amount),
    });

    try {
      const token = localStorage.getItem("token");
      if (validateForm()) {
        setIsloading(true);
        const response = await apiClient.post(
          "/v1/savings/createsavings",
          {
            name: savingsInput.name,
            frequency: savingsInput.frequency,
            duration: savingsInput.duration,
            amount: Number(savingsInput.amount),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          toast.success("Savings created successfully", { onClose: 3000 });
          setIsloading(false);
          navigate('/savings')
        }
      }
    } catch (e) {
      toast.error("Error creating savings", { onClose: 3000 });
      setIsloading(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSavingsInput((prev) => ({
      ...prev,
      [id]: id === "amount" ? value.replace(/[^0-9.]/g, "") : value, // Allow only numeric values in amount
    }));
  };

  const handleSelectDuration = (index) => {
    setSavingsInput((prev) => ({ ...prev, duration: index }));
  };

  const handleSelectFrequency = (frequency) => {
    setSavingsInput((prev) => ({ ...prev, frequency }));
  };

  return (
    <div className="bg-gray-100 h-auto min-h-screen p-3 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mb-10">
      <div className="flex mb-6">
        <h1 className="text-lg font-semibold">Create a new savings</h1>
      </div>
      <div className="flex-shrink-0 w-72 h-36 bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-xl shadow-md"></div>

      <div className="mt-4">
        <h1 className="text-lg font-semibold text-black text-left">
          Select Duration
        </h1>
        <div className="flex gap-2.5 mt-2">
          {durationOptions.map(({ index, value }) => (
            <div
              key={index}
              onChange={handleChange}
              onClick={() => handleSelectDuration(index)}
              className={`flex-shrink-0 w-[30%] h-24 ${
                savingsInput.duration === index ? "bg-blue-600" : "bg-[#101c4e]"
              } p-2 text-white rounded-xl shadow-md cursor-pointer`}
            >
              <div className="flex flex-col items-center">
                <h3 className="text-3xl text-white font-semibold">{value}</h3>
                <p className="text-md text-white font-bold my-2">Months</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-lg font-semibold text-black text-left">
          Select Frequency
        </h1>
        <div className="flex gap-2.5 mt-2">
          {frequencyOptions.map(({ index, value }) => (
            <div
              key={index}
              onChange={handleChange}
              onClick={() => handleSelectFrequency(index)}
              className={`flex-shrink-0 w-[30%] h-14 ${
                savingsInput.frequency === index
                  ? "bg-blue-600"
                  : "bg-[#101c4e]"
              } p-2 text-white rounded-xl shadow-md cursor-pointer`}
            >
              <div className="flex flex-col items-center">
                <p className="text-md text-white font-bold my-2">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 mb-4">
        <FormInput
          id={"name"}
          type={"text"}
          placeholder={"Enter your savings name"}
          onChange={handleChange}
          value={savingsInput.name}
          required={true}
        />

        <div className="border-b mt-4 pl-4 relative flex items-center bg-gray-100 mb-6">
          <span className="text-gray-500 text-lg">₦</span>
          <input
            className="w-full pl-2 text-left bg-transparent bg-gray-100 focus:outline-none focus:ring-0"
            type="text"
            id="amount"
            placeholder="0.00"
            onChange={handleChange}
            value={savingsInput.amount}
            required={true}
          />
        </div>

        {validationError && (
          <p className="text-red-500 text-sm mt-2">{validationError}</p>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around py-3  max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <button
          className="min-w-72 p-2 text-white bg-[#101c4e] rounded-lg"
          onClick={handleCreateSavings}
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

export default CreateSavings;
