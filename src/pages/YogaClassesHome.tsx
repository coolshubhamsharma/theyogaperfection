import { useState } from "react"
import { HomeYogaClasses } from "../assets/ClientInfo"
import CommunitySection from "../components/CommunitySection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ContentSlide from "../components/OnlineYogaClasses.tsx/ContentSlide"
import RateCards from "../components/OnlineYogaClasses.tsx/RateCards"
import { useParams } from "react-router-dom"
import { Qa } from "../assets/ClientInfo"
import Question from "../components/OnlineYogaClasses.tsx/Question"
import GetInTouch from "../components/ContactUs/GetInTouch"


const YogaClassesHome = () => {

  const page = true;
  const {city} = useParams();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  //If no question is open, clicking a question opens it.
  // If a question is already open, clicking a different question closes the previous one and opens the new one.
  //If clicking the same question again, it closes (sets openIndex = null).
  const handleToggle = (index: number) => { 
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="overflow-hidden">

        <div>
            <Navbar/>
        </div>
        
        {/* section 1 */}
        <div className="ml-[12vw] mr-[12vw]">
            <h1 className="text-4xl font-serif font-bold mt-20 text-[#132c4cf7] text-center">Yoga Classes at Home in  {city ? city.charAt(0).toUpperCase() + city.slice(1) : ""}– Personalized Sessions for Your Well-Being</h1> {/*if city is undefined --> "" */}
            <h1 className="text-md font-serif text-center mt-4">Looking for a personal yoga trainer at home in {city ? city.charAt(0).toUpperCase() + city.slice(1) : ""} Whether you're a senior wanting to stay active, a woman seeking relaxation and strength, or a man looking to enhance flexibility and fitness, we've got you covered.Enjoy one-on-one yoga training from expert instructors in the comfort of your home. Stay fit, stress-free, and energized – on your schedule! Book a session today!</h1>
      </div>

       {/*section 2  */}
      <div>
        <div className="flex justify-between m-[8vw] mt-8">
          <div className="w-[40vw]">
            <img className="rounded-md h-[85vh] w-[40vw]" src="https://images.unsplash.com/photo-1608857846810-ef2632cd75bd?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>

          <div className="card shadow-lg w-[40vw] bg-white">
            <h1 className=" mt-5 text-3xl ml-5 font-semibold text-[#132c4cf7]">Personal Yoga Trainer at Home</h1>
            
            <div className="ml-5 mt-12">
            
            <h1 className=""><span className="text-lg font-serif font-semibold"> ✅ Certified & Experienced Instructors</span></h1>
            <p className="ml-1 text-md">Learn from professional yoga trainers.</p>

            <h1 className="mt-5"><span className="text-lg font-serif font-semibold"> ✅ Personalized Yoga Sessions</span></h1>
            <p className="ml-1 text-md">From beginners to advanced levels, customized for your needs.</p>

            <h1 className="mt-5"><span className="text-lg font-serif font-semibold"> ✅ For All Ages & Genders </span></h1>
            <p className="ml-1 text-md">Yoga tailored for seniors, women, men, and kids.</p>

            <h1 className="mt-5"><span className="text-lg font-serif font-semibold"> ✅ Flexible & Convenient</span></h1>
            <p className="ml-1 text-md">Train at your home, on your schedule.</p>

            <h1 className="mt-5"><span className="text-lg font-serif font-semibold"> ✅  Male & Female Trainers Available </span></h1>
            <p className="ml-1 text-md"> Choose a trainer that suits your comfort.</p>
            </div>
            
          </div>        
        </div>
      </div>

      {/* section 3 */}
      <div className="ml-[8vw] mr-[8vw] mt-10 flex flex-col">
        <h1 className="text-3xl font-semibold font-serif text-[#132c4cf7]">Personal Yoga Trainer at Home in {city ? city.charAt(0).toUpperCase() + city.slice(1) : ""} – Pricing & Packages</h1>
        <hr className="h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4"></hr>

        <div>
          <RateCards/>
        </div>
      </div>

      {/* section 4 */}
      <div className="ml-[8vw] mr-[8vw] mt-10 flex flex-col">
        <h1 className="text-3xl font-semibold font-serif text-[#132c4cf7]">Introducing Home Yoga Classes In {city ? city.charAt(0).toUpperCase() + city.slice(1) : ""}</h1>
        <hr className="h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4"></hr>
        {
          HomeYogaClasses.map((slide,index)=> (
            <ContentSlide Title={slide.Title} Content={slide.Content} key={index} Page={page} city={city}/>
          ))
        }

      </div>

      {/* section 5 */}
      <div className="ml-[8vw] mr-[8vw] mt-20 flex flex-col">
        <h1 className="text-2xl font-semibold font-serif text-[#132c4cf7]">Frequently Asked Questions (FAQs) about Yoga Classes at Home in {city ? city.charAt(0).toUpperCase() + city.slice(1) : ""}</h1>
        <hr className="h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4"></hr>
        <div className="flex flex-col mt-4">
          {Qa.map((set,index)=>(
            <Question Question={set.Question} Answer={set.Answer} city={city} isOpen={openIndex === index} onToggle={()=>handleToggle(index)} key={index}/>
          ))}

        </div>

      </div>

      {/* section 6 */}
      <div className="mt-20 flex flex-col">
        <h1 className="ml-[8vw] mr-[8vw] text-2xl font-semibold font-serif text-[#132c4cf7]">Send Your Details To Contact Us Or Directly Reach Us On WhatsApp</h1>
        <hr className="ml-[8vw] mr-[8vw] h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4"></hr>
        <div>
        <GetInTouch/>
        </div>

      </div>

      {/* section 6 */}
      <div>
        <CommunitySection/>
      </div>

      <Footer/>

    </div>
  )
}

export default YogaClassesHome