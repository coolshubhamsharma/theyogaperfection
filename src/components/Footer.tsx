import { GrInstagram } from "react-icons/gr";
import { GrPinterest } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="h-[50vh] pl-20 pt-5 pr-20 flex flex-col bg-blue-50">

      <div className="flex justify-evenly">
        <div className="flex flex-col mr-20">
          <h1 className="text-lg font-semibold font-serif text-[#132c4cf7]">Important Links</h1>
          <div className="justify-between text-sm flex flex-col font-semibold font-serif cursor-pointer text-[#81B9B9]">
            <p className="hover:text-[#483D8B] m-1"><Link to="/">Home</Link></p>
            <p className="hover:text-[#483D8B] m-1"><Link to="/about-us">About Us</Link></p>
            <p className="hover:text-[#483D8B] m-1"><Link to="/contact-us">Contact Us</Link></p>
            <p className="hover:text-[#483D8B] m-1"><Link to="/yoga-classes">Yoga Classes</Link></p>
            <p className="hover:text-[#483D8B] m-1"><Link to="/blog">Blogs</Link></p>
            <p className="hover:text-[#483D8B] m-1"><Link to="/write-for-us">Write For Us</Link></p>
          </div>
        </div>

        <div className="flex flex-col mr-20">
          <h1 className="text-lg font-semibold font-serif text-[#132c4cf7]">Cities</h1>
          <div className="text-sm flex flex-col font-semibold font-serif cursor-pointer text-[#81B9B9]">
            <p className="hover:text-[#483D8B] m-1"><Link to="/home-yoga-classes/delhi">Delhi</Link></p>
            <p className="hover:text-[#483D8B] m-1"><Link to="/home-yoga-classes/gurugram">Gurugram</Link></p>
            <p className="hover:text-[#483D8B] m-1"><Link to="/home-yoga-classes/noida">Noida</Link></p>
            <p className="hover:text-[#483D8B] m-1"><Link to="/home-yoga-classes/faridabad">Faridabad</Link></p>            
            <p className="hover:text-[#483D8B] m-1"><Link to="/home-yoga-classes/gaziyabad">Gaziyabad</Link></p>            
            <p className="hover:text-[#483D8B] m-1"><Link to="/home-yoga-classes/banglore">Banglore</Link></p>            
          </div> 
        </div>

        <div className="flex flex-col mr-20">
          <h1 className="text-lg font-semibold font-serif text-[#132c4cf7]">Services</h1>
          <div className="text-sm flex flex-col font-semibold font-serif cursor-pointer text-[#81B9B9]">
            <p className="hover:text-[#483D8B] m-1">Online Yoga Classes</p>
            <p className="hover:text-[#483D8B] m-1"><Link to="/yoga-classes">Home Yoga Classes</Link></p>
            <p className="hover:text-[#483D8B] m-1">Prenatal Yoga Classes</p>
            <p className="hover:text-[#483D8B] m-1">Corporate Yoga Classes</p>
            <p className="hover:text-[#483D8B] m-1">Group Yoga Classes</p>            
          </div> 
        </div>
        
        <div className="flex flex-col mr-20 w-[15vw]">
          <h1 className="text-lg font-semibold font-serif text-[#132c4cf7]">Visit Us</h1>
          <h1 className="text-lg font-semibold font-serif text-[#81B9B9]">Head Office :- Sector - 24 , Rohini , Delhi</h1>
          
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <div>
          <h1 className="text-sm">Copyright © The Yoga Perfection</h1>
          <h1 className="text-sm">Developed by :- <span className="text-purple-700 font-semibold">Vayunautix</span></h1>
        </div>
        <div className="flex justify-between mr-[18vw]">
            <GrInstagram className="mr-6 text-3xl hover:cursor-pointer"/>
            <GrPinterest className="mr-6 text-3xl text-red-600 hover:cursor-pointer"/>
            <ImFacebook2 className="text-3xl hover:cursor-pointer text-blue-600"/>
        </div>
      </div>
        
    </div>
  )
}

export default Footer