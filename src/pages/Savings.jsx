import { useNavigate } from "react-router-dom";
import FooterNavigation from "../components/FooterNavigation";

const Savings = () => {
  const navigate = useNavigate();
  const savings = [
    {
      name: "Savings balance",
      amount: "N50,000",
    },
    {
      name: "Vacation Fund",
      amount: "N50,000",
    },
  ];
  return (
    <div className="bg-gray-100 min-h-screen p-3">
      <div className="text-lg font-semibold mb-8">
        <h1>Savings</h1>
      </div>
      <div className="mb-6">
        <div className="flex  overflow-x-auto space-x-3 scrollbar-hide">
          {savings.map((portfolio, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[93%] bg-gradient-to-r bg-[#101c4e] p-2 text-white rounded-lg shadow-md"
            >
              <h3 className="text-sm mb-2 text-white font-semibold">
                {portfolio.name}
              </h3>
              <div className="flex items-center justify-between gap-2">
                <p className="text-2xl text-white font-bold my-2">
                  {portfolio.amount}
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
        <div className="flex justify-evenly items-center">
          <i className="fas fa-plus"></i>
          <p className="text-black" onClick={() => navigate("/create-savings")}>
            Add Savings
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-lg font-semibold text-black">My Savings</h1>
      </div>
      <FooterNavigation />
    </div>
  );
};

export default Savings;
