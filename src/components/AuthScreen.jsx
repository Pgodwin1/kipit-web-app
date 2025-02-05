// import fullLogo from "../../icons/Full.png";
// import landingDashboard from "../../icons/landing-dashboard.png";

const AuthScreen = ({ children }) => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-1 h-full p-8 md:mr-16 flex-col justify-between sm:w-[940px] text-sm">
        <div className="flex justify-center sm:justify-start">
          <div className="justify-center text-center">
            {/* <img src={fullLogo} alt="SwiftApprove" className="mx-6 h-10" /> */}
          </div>
        </div>
        {children}
        <div className="flex justify-between text-xs">
          <p>© Kipit</p>
          <p>
            <a href="mailto:help@swiftapprove.io">help@kipit.com</a>
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-rows-5 hidden xl:pr-24 p-4 xl:p-0 justify-center xl:self-start h-screen bg-[#F1F5F9] overflow-y-hidden w-full">
        <div className="grid xl:row-span-2 row-span-5 self-center">
          <div className="flex flex-col xl:mt-32 gap-6 xl:pl-24 xl:mb-24">
            <div className="justify-center text-center">
              {/* <img src={fullLogo} alt="SwiftApprove" className="h-10" /> */}
            </div>
            <div className="text-lg lg:text-3xl">
              The centralized platform for all your financial needs
            </div>
          </div>
        </div>
        <div className="row-span-3 hidden xl:flex">
          {/* <img src={landingDashboard} alt="SwiftApprove" /> */}
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
