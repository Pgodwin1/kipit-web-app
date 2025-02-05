import FormInput from "../components/FormInput";

const CreateSavings = () => {
  const duration = [{ duration: "3" }, { duration: "6" }, { duration: "12" }];

  const frequency = [
    { frequence: "Daily" },
    { frequence: "Weekly" },
    { frequence: "Monthly" },
  ];
  return (
    <div className="bg-gray-100 h-auto min-h-screen p-3">
      <div className="flex mb-6">
        <h1 className="text-lg font-semibold">Create a new savings</h1>
      </div>
      <div className="flex-shrink-0 w-72 h-36 bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-xl shadow-md"></div>

      <div className="mt-4">
        <h1 className="text-lg font-semibold text-black">Select Duration</h1>
        <div className="flex gap-2.5 mt-2">
          {duration.map((du, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[30%] h-24 bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-xl shadow-md"
            >
              <div className="flex flex-col items-center">
                <h3 className="text-3xl text-white font-semibold">
                  {du.duration}
                </h3>
                <p className="text-md text-white font-bold my-2">Months</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-lg font-semibold text-black">Select Frequency</h1>
        <div className="flex gap-2.5 mt-2">
          {frequency.map((fr, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[30%] h-14 bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-xl shadow-md"
            >
              <div className="flex flex-col items-center">
                <p className="text-md text-white font-bold my-2">
                  {fr.frequence}
                </p>
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
          required
        />

        <div className="border-b mt-4">
          <input className="bg-" type="text" placeholder="#0.00" />
        </div>
      </div>

      <div className="sticky bottom-0 bg-white shadow-lg flex justify-around py-3">
        <button className="min-w-72 p-2 text-white bg-[#101c4e] rounded-lg ">
          Continue
        </button>
      </div>
    </div>
  );
};

export default CreateSavings;
