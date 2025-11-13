import { Link } from "react-router-dom";

const CommunitySection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-400 to-purple-500 py-16 sm:py-20 px-6 sm:px-10 md:px-20 flex items-center justify-center text-white text-center rounded-2xl shadow-md mt-20">
      <div className="max-w-3xl">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
          Join Our Yoga Community!!
        </h1>
        <p className="font-medium text-base sm:text-lg md:text-xl leading-relaxed">
          “Revitalize your mind, body, and spirit with our outstanding yoga sessions and embrace a healthier, more joyful you!”
        </p>
        <Link
          to="https://whatsform.com/fdVCNE"
          target="_blank"
          rel="noopener noreferrer"
        >
           <button className="mt-8 bg-white text-purple-700 font-semibold py-3 px-8 rounded-full hover:bg-purple-700 hover:text-white transition-all duration-300">
            Join Now
           </button>
        </Link>
      </div>
    </div>
  );
};

export default CommunitySection;
