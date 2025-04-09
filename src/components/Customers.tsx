import { FaQuoteLeft } from "react-icons/fa";

interface Customer{
  Name:string;
  company:string;
  views:string;
}

const Customers = (props:Customer) => {
  return (
    <div>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg">
      {/* Quote Section */}
      <div className="relative bg-indigo-100 p-10 rounded-md w-[25vw] h-[48vh]">
        <div className="absolute -top-4 left-4 bg-purple-600 p-2 rounded-md">
          <span className="text-white text-xl"><FaQuoteLeft className="text-white text-2xl" /></span>
        </div>
        <p className="text-gray-500 leading-7">
        {props.views}
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center mt-6">
        <img
          src="https://via.placeholder.com/50"
          alt="User"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{props.Name}</h3>
          <p className="text-gray-500 text-sm">
            Creative Designer, <span className="text-indigo-600">{props.company}</span>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Customers

