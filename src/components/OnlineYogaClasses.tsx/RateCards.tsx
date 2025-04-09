import { Link } from "react-router-dom"


const RateCards = () => {
  return (
    <div className="mt-2 flex justify-between mb-5">
        <div className="card shadow-lg h-[65vh] w-[27vw] flex flex-col p-5 mt-5 mb-10">
            <div className="flex flex-col justify-between mb-5">
              <h1 className="text-2xl font-serif font-bold tracking-wider text-left mt-5 text-[#A33D3D]">PER SESSION </h1>
              <h1 className="text-md font-serif text-left mt-7 font-semibold text-[#81B9B9]">Starts From @600</h1>
              <hr className="mt-7" />
            </div>
            <div className="flex flex-1 flex-col justify-evenly ">
              <div className="ml-10 flex flex-col justify-between h-[20vh]">
                <ul className="list-disc">
                  <li>Paid Demo</li>
                  <li>1 Hour Session</li>
                  <li>Experienced Trainer</li>
                  <li>Premium Services</li>
                </ul>
              </div>
              <div className="flex justify-center mt-5 flex-1">
                <button className="btn w-[20vw] font-serif font-semibold bg-[#F8F6EF] text-[#81B9B9] hover:text-white hover:bg-[#81B9B9] tracking-wider"><Link to="https://whatsform.com/fdVCNE">BOOK NOW</Link></button>
              </div>
            </div>
        </div>

        <div className="card shadow-lg h-[65vh] w-[27vw] flex flex-col p-5 mt-5 mb-10">
            <div className="flex flex-col justify-between mb-5">
              <h1 className="text-2xl font-serif font-bold tracking-wider text-left mt-5 text-[#A33D3D]">3 DAYS IN A WEEK </h1>
              <h1 className="text-md font-serif text-left mt-7 font-semibold text-[#81B9B9]">Starts From @6000</h1>
              <hr className="mt-7" />
            </div>
            <div className="flex flex-1 flex-col justify-evenly">
              <div className="ml-10 flex flex-col justify-between h-[20vh]">
                <ul className="list-disc">
                  <li>500rs for demo ( this amount will adjust in your monthly charges)</li>
                  <li>1 Hour Session</li>
                  <li>Every alternative day</li>
                  <li>12 sessions in a month</li>
                </ul>
              </div>
              <div className="flex justify-center mt-5 flex-1">
                <button className="btn w-[20vw] font-serif font-semibold bg-[#F8F6EF] text-[#81B9B9] hover:text-white hover:bg-[#81B9B9] tracking-wider"><Link to="https://whatsform.com/fdVCNE">BOOK NOW</Link></button>
              </div>
            </div>
        </div>

        <div className="card shadow-lg h-[65vh] w-[27vw] flex flex-col p-5 mt-5 mb-10">
            <div className="flex flex-col justify-between mb-5">
              <h1 className="text-2xl font-serif font-bold tracking-wider text-left mt-5 text-[#A33D3D]">5 DAYS IN A WEEK </h1>
              <h1 className="text-md font-serif text-left mt-7 font-semibold text-[#81B9B9]">Starts From @9000</h1>
              <hr className="mt-7" />
            </div>
            <div className="flex flex-1 flex-col justify-evenly">
              <div className="ml-10 flex flex-col justify-between h-[20vh]">
                <ul className="list-disc">
                  <li>500rs for demo ( this amount will adjust in your monthly charges)</li>
                  <li>1 Hour Session</li>
                  <li>Monday to Friday</li>
                  <li>20 sessions in a month</li>
                </ul>
              </div>
              <div className="flex justify-center mt-5 flex-1">
                <button className="btn w-[20vw] font-serif font-semibold bg-[#F8F6EF] text-[#81B9B9] hover:text-white hover:bg-[#81B9B9] tracking-wider"><Link to="https://whatsform.com/fdVCNE">BOOK NOW</Link></button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default RateCards