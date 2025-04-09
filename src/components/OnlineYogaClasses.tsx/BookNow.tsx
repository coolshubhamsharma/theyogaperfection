import { useNavigate } from "react-router-dom";

interface Book {
    City:string
}

const BookNow = (props :Book) => {

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate(`/home-yoga-classes/${props.City.toLowerCase()}`);
  }

  return (
    <div>
        <div className="card shadow-lg h-[40vh] w-[24vw] flex flex-col p-5 mt-10">
          <div className="flex flex-col justify-between flex-1 mb-5">
          <h1 className="text-2xl font-serif font-bold tracking-wider text-center mt-5 text-[#A33D3D]">{props.City} </h1>
          <h1 className="text-md font-serif text-left mt">Begin Your Yoga Journey with a Personal Trainer.</h1>
          <hr />
          </div>

          <div className="flex justify-center">
            <button onClick={handleClick} className="btn w-[12vw] font-serif font-semibold bg-[#F8F6EF] text-[#81B9B9] hover:text-white hover:bg-[#81B9B9] tracking-wider">BOOK NOW</button>
          </div>
        
        </div>
    </div>
  )
}

export default BookNow