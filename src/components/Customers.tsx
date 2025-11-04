import { FaQuoteLeft } from "react-icons/fa";

interface Customer {
  Name: string;
  company: string;
  views: string;
}

const Customers = (props: Customer) => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
        {/* Quote Section */}
        <div className="relative bg-indigo-50 p-5 sm:p-8 rounded-xl min-h-[30vh] flex flex-col justify-center">
          <div className="absolute -top-4 left-4 bg-purple-600 p-2 rounded-md">
            <FaQuoteLeft className="text-white text-xl sm:text-2xl" />
          </div>
          <p className="text-gray-600 leading-7 text-sm sm:text-base mt-3">
            {props.views}
          </p>
        </div>

        {/* User Info */}
        <div className="flex items-center mt-6">
          <img
            src="https://via.placeholder.com/60"
            alt={props.Name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          />
          <div className="ml-3 sm:ml-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {props.Name}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">
              Creative Designer,{" "}
              <span className="text-indigo-600">{props.company}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
