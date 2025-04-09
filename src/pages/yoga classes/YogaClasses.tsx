import Navbar from "../../components/Navbar"
import BookNow from "../../components/OnlineYogaClasses.tsx/BookNow"
import { PytAtHome , CityColors} from "../../assets/ClientInfo"
import ContentSlide from "../../components/OnlineYogaClasses.tsx/ContentSlide"
import CommunitySection from "../../components/CommunitySection"
import Footer from "../../components/Footer"




const YogaClasses = () => {

  return (
    <div className="overflow-x-hidden">

      <Navbar/>

      <div className="ml-[12vw] mr-[12vw]">
        <h1 className="text-4xl font-serif font-bold mt-20 text-[#132c4cf7] text-center">Introducing  Yoga Classes At Home In India</h1>
        <h1 className="text-md font-serif text-center mt-4">Step into a world where you can bring a yoga teacher right to your home—your gateway to wellness, harmony, and a healthier life, all within your personal space. In today’s busy world, prioritizing self-care isn’t always easy. Our Home Yoga Classes provide a convenient solution, allowing you to experience the time-honored benefits of yoga without leaving your home.</h1>
      </div>

      <div className="ml-[12vw] mr-[12vw] h-[50vh] mt-12 flex justify-between mb-10">
        <img className="rounded-sm w-[17vw] " src="https://plus.unsplash.com/premium_photo-1664053011445-e7c1e14cd8ba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className="rounded-sm w-[17vw] " src="https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className="rounded-sm w-[17vw] " src="https://images.unsplash.com/photo-1600881333168-2ef49b341f30?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

      <div className="ml-[12vw] mr-[12vw]">
        <h1 className="text-4xl font-serif font-bold mt-20 text-[#132c4cf7] text-left">Where We Are Located</h1>  
        <h1 className="text-md font-semibold font-serif mt-2">We offer yoga classes across multiple cities in India, bringing wellness to your doorstep. Our services are available in:</h1> 
        <hr className="h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4"></hr>
      </div>

      <div className="ml-[12vw] mr-[12vw] flex flex-wrap w-[76vw] justify-between">
          {
            CityColors.map((city,index) => (
              <BookNow City={city.Name} key={index}/>
            ))
          }
          
      </div>

      <div className="ml-[12vw] mr-[12vw] mt-20">
        <h1 className="text-4xl font-serif font-bold mt-20 text-[#132c4cf7] text-left">Why Choose a Personal Yoga Trainer at Home?</h1>
        <hr className="h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4"></hr>

        <div className="flex flex-col">
          {
            PytAtHome.map((slide,index) => (
          <ContentSlide Title={slide.Title} Content={slide.Content} key={index}/>
            ))
          }
        </div>
      </div>

      <div>
        <CommunitySection/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default YogaClasses