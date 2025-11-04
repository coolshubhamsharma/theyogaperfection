import { Link } from "react-router-dom";
import logo from "../../assets/logo.avif";

const YogaBanner = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-[18vh] w-full mt-5 bg-orange-50 card shadow-sm p-5 gap-4 sm:gap-0">
      <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
        <img
          className="h-20 w-20 sm:h-[13vh] sm:w-[7vw] object-cover rounded-xl"
          src={logo}
          alt="The Yoga Perfection Logo"
        />
        <h1 className="text-lg sm:text-xl font-serif font-semibold">
          The Yoga Perfection
        </h1>
      </div>
      <button className="btn w-full sm:w-[13vw] h-[7vh] bg-black text-white hover:text-black hover:bg-white text-sm sm:text-base rounded-md">
        <Link to="https://whatsform.com/fdVCNE">Get Started Now</Link>
      </button>
    </div>
  );
};

export default YogaBanner;
