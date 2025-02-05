import "./spinner.css";

const Spinner = () => {
  return (
    <div className="lds-ring w-5 h-5 text-white">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
