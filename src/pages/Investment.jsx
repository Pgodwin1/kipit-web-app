import FooterNavigation from "../components/FooterNavigation";

const Investment = () => {
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
  return (
    <div className="bg-gray-100 min-h-screen p-3">
      <div className="flex mb-6">
        <h1 className="text-lg font-semibold">Investment</h1>
      </div>
      <div className="flex  overflow-x-auto space-x-3 scrollbar-hide">
        <div className="flex-shrink-0 w-[93%] h-36 bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-xl shadow-md"></div>
        <div className="flex-shrink-0 w-[93%] h-36 bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-xl shadow-md"></div>
      </div>

      <div className="flex justify-between mt-6">
        <div className="flex-shrink-0 w-[46%] h-36 bg-gradient-to-r bg-white border border-blue-800 p-2 text-white rounded-xl shadow-md">
          <div className="flex flex-col items-center p-4">
            <i className="fas fa-chart-bar"></i>
            <p className="text-black mt-2">#0.00</p>
            <button className="w-28 text-white rounded-lg mt-3 p-1 bg-[#101c4e]">
              View Details
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 w-[46%] h-36 bg-gradient-to-r bg-white border border-blue-800 p-2 text-white rounded-xl shadow-md">
          {" "}
          <div className="flex flex-col items-center p-4">
            <i className="fas fa-chart-bar"></i>
            <p className="text-black mt-2">#0.00</p>
            <button className="w-28 text-white rounded-lg mt-3 p-1 bg-[#101c4e]">
              View Details
            </button>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0  w-full mt-6 bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-lg shadow-md">
        <h3 className="text-sm text-center text-white font-semibold">Invest</h3>
      </div>

      <div className="flex-shrink-0 w-full mt-3 bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-lg shadow-md">
        <h3 className="text-sm text-center text-white font-semibold">
          Update Investment Settings
        </h3>
      </div>

      <div className="mt-6 mb-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Inestment Plans</h2>
          {/* <button className="text-blue-600 text-sm font-semibold">
            See All →
          </button> */}
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

      <FooterNavigation />
    </div>
  );
};

export default Investment;
