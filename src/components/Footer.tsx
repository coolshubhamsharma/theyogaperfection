import { GrInstagram, GrPinterest } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-50 py-10 px-6 sm:px-10 md:px-20 flex flex-col text-[#132c4cf7]">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between gap-10">
        {/* Important Links */}
        <div className="flex flex-col min-w-[150px]">
          <h1 className="text-lg font-semibold font-serif mb-3">Important Links</h1>
          <div className="flex flex-col text-sm font-semibold font-serif text-[#81B9B9] space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about-us", label: "About Us" },
              { to: "/contact-us", label: "Contact Us" },
              { to: "/yoga-classes", label: "Yoga Classes" },
              { to: "/blog", label: "Blogs" },
              // { to: "/write-for-us", label: "Write For Us" },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="hover:text-[#483D8B] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div className="flex flex-col min-w-[150px]">
          <h1 className="text-lg font-semibold font-serif mb-3">Cities</h1>
          <div className="flex flex-col text-sm font-semibold font-serif text-[#81B9B9] space-y-2">
            {["Delhi", "Gurugram", "Noida", "Faridabad", "Gaziyabad", "Bangalore"].map((city, i) => (
              <Link
                key={i}
                to={`/home-yoga-classes/${city.toLowerCase()}`}
                className="hover:text-[#483D8B]"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col min-w-[150px]">
          <h1 className="text-lg font-semibold font-serif mb-3">Services</h1>
          <div className="flex flex-col text-sm font-semibold font-serif text-[#81B9B9] space-y-2">
            <p className="hover:text-[#483D8B]">Online Yoga Classes</p>
            <Link to="/yoga-classes" className="hover:text-[#483D8B]">
              Home Yoga Classes
            </Link>
            <p className="hover:text-[#483D8B]">Prenatal Yoga Classes</p>
            <p className="hover:text-[#483D8B]">Corporate Yoga Classes</p>
            <p className="hover:text-[#483D8B]">Group Yoga Classes</p>
          </div>
        </div>

        {/* Visit Us */}
        <div className="flex flex-col max-w-sm">
          <h1 className="text-lg font-semibold font-serif mb-3">Visit Us</h1>
          <p className="text-sm font-semibold font-serif text-[#81B9B9]">
            Head Office: Sector - 24, Rohini, Delhi
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 border-t border-gray-200 pt-5 text-center sm:text-left">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm">Copyright © The Yoga Perfection</p>
          <p className="text-sm">
            Developed by: <span className="text-purple-700 font-semibold">Vayunautix</span>
          </p>
        </div>

        <div className="flex gap-5 text-3xl">
          <GrInstagram className="hover:text-pink-600 cursor-pointer" />
          <GrPinterest className="text-red-600 hover:text-red-700 cursor-pointer" />
          <ImFacebook2 className="text-blue-600 hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
