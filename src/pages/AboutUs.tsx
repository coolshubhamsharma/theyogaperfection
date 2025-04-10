import { Yoga02Icon } from "hugeicons-react"
import Navbar from "../components/Navbar"
import AboutCards from "../components/About/AboutCards"
import CommunitySection from "../components/CommunitySection"
import Footer from "../components/Footer"
import OnlineYoga from "../components/OnlineYogaClasses.tsx/OnlineYoga"
import OfflineYoga from "../components/About/OfflineYoga"
import OtherPrograms from "../components/About/OtherPrograms"
import CallOutSection2 from "../components/About/CallOutSection2"
import WhatsApp from "../components/Whatsapp/WhatsApp"

// bg-amber-50
const AboutUs = () => {
  return (
    <div className=" overflow-x-hidden">
      <div>
        <Navbar/>
      </div>

      <WhatsApp/>

      <div className="mt-[16vh]">
        <div className="text-center flex-col" >
          <Yoga02Icon className="ml-[46vw] mr-[45vw] text-purple-700" size={70} />
          <h1 className="text-2xl mt-10 font-semibold text-center mr-[2vw] text-[#132c4cf7]">About Us</h1>
          <h1 className="text-5xl mt-7 font-bold text-[#132c4cf7]">Rejuvenating The Yogic Way of Living</h1>
          <div className="mt-[8vh] ml-[25vw] mr-[25vw] mb-20 text-gray-500 font-semibold">
          <p>We provide a variety of yoga classes, including online, at-home, corporate, and studio sessions. Below, we highlight the key reasons why our services are the ideal choice for your yoga journey.</p>
          </div>
        </div>

        <div>
          <AboutCards/>
        </div>

        <div>
          <CallOutSection2/>
        </div>
     
      </div>

      <div className="text-center flex-col mt-40" >
          <Yoga02Icon className="ml-[46vw] mr-[45vw] text-purple-700" size={70} />
          <h1 className="text-5xl mt-7 font-bold text-[#132c4cf7]">About Our Services</h1>
          <div className="mt-3 flex justify-center mr-[15vw] ml-[15vw]">
          <p className="text-gray-600 mt-2 font-semibold">We provide flexible class options tailored to fit your busy schedule, whether you prefer individual or group sessions at a location and time that suits you. Our goal is to deliver the best possible experience, building long-term relationships with our clients.</p>
          </div>
      </div>

      <div className="mt-16 ml-[8vw] mr-[8vw] ">
        <h1 className="text-left text-3xl text-[#132c4cf7] font-semibold">Online Yoga Classes</h1>
        <p className="font-semibold text-gray-600 text-sm">Join our online yoga classes with best yoga instructor at just Rs 999/ month</p>
        <hr className="h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4"></hr>

        <div className="">
          <OnlineYoga/>
        </div>
      </div>

      <div className="mt-16 ml-[8vw] mr-[8vw] ">
        <h1 className="text-left text-3xl text-[#132c4cf7] font-semibold">Offline Yoga Classes</h1>
        <p className="font-semibold text-gray-600 text-sm">Opt For Best Yoga Trainers At Home in Delhi</p>
        <hr className="h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4"></hr>

        <div className="">
          <OfflineYoga/>
        </div>
      </div>

      <div className="mt-16 ml-[8vw] mr-[8vw] ">
        <h1 className="text-left text-3xl text-[#132c4cf7] font-semibold">Our Other Fitness Programs</h1>
        <p className="font-semibold text-gray-600 text-sm">Opt For Best Trainers At Home/Group Classes in Delhi</p>
        <hr className="h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4"></hr>

        <div className="">
          <OtherPrograms/>
        </div>
      </div>

      <div className="mt-[20vh]">
        <CommunitySection/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default AboutUs