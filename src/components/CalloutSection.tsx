import { Link } from "react-router-dom";
import "./Callout.css";

const CalloutSection = () => {
  return (
    <section className="self relative bg-cover bg-center bg-fixed bg-no-repeat flex items-center justify-center h-[60vh] sm:h-[70vh] md:h-[75vh] w-full text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#070b2be0]" />

      {/* Text Content */}
      <div className="relative flex flex-col items-center text-center px-4 sm:px-6 md:px-10">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 leading-snug">
          Certified Yoga Professionals. Try Today!
        </h1>
        <h2 className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl">
          Unwind your body and mind — bring the studio to your home with our yoga classes.
        </h2>

        {/* CTA Button */}
        <Link
          to="https://whatsform.com/fdVCNE"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-purple-700 hover:bg-blue-900 text-white font-semibold rounded-full text-sm sm:text-base md:text-lg px-6 sm:px-10 py-3 sm:py-4 transition-all duration-300 active:scale-95"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
};

export default CalloutSection;
