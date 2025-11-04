import { useNavigate } from "react-router-dom";

interface Book {
  City: string;
}

const BookNow = ({ City }: Book) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home-yoga-classes/${City.toLowerCase()}`);
  };

  return (
    <div className="card shadow-lg h-[40vh] w-[22rem] sm:w-[20rem] flex flex-col justify-between p-6 rounded-xl bg-white">
      <div>
        <h1 className="text-2xl font-serif font-bold text-center mt-3 text-[#A33D3D]">{City}</h1>
        <p className="text-md font-serif text-left mt-3 text-gray-700">
          Begin your yoga journey with a certified personal trainer.
        </p>
        <hr className="my-3 border-gray-300" />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleClick}
          className="btn w-[10rem] font-serif font-semibold bg-[#F8F6EF] text-[#81B9B9] hover:text-white hover:bg-[#81B9B9] tracking-wider"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default BookNow;
