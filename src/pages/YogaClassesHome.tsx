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
import WhatsApp from "../components/Whatsapp/WhatsApp"
import { Helmet } from "react-helmet"


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

  const cityName = city ? city.charAt(0).toUpperCase() + city.slice(1) : "Your City";

  return (
    <>

      {/* SEO */}
      <Helmet>
            <title>Yoga Classes at Home in {cityName} | The Yoga Perfection</title>
            <meta
              name="description"
              content={`Personal yoga trainer at home in ${cityName}. Certified instructors offering customized sessions for men, women & seniors.`}
            />
            <meta name="keywords" content={`Yoga in ${cityName}, Personal Yoga Trainer, ${cityName} Yoga Classes`} />
            <meta property="og:title" content={`Yoga Classes at Home in ${cityName}`} />
            <meta property="og:description" content={`Join personalized home yoga sessions in ${cityName} with The Yoga Perfection.`} />
            <meta property="og:image" content="https://images.unsplash.com/photo-1608857846810-ef2632cd75bd?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3" />
            <link rel="canonical" href={`https://theyogaperfection.com/home-yoga-classes/${cityName.toLowerCase()}`} />
          </Helmet>

      {/* Page Content */}
      <div className="overflow-hidden">

          <div>
              <Navbar/>
          </div>

          <WhatsApp/>
          
          {/* section 1 */}  
          <div className="px-6 sm:px-10 md:px-20 lg:px-32 text-center mt-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#132c4cf7] leading-snug">
              Yoga Classes at Home in{" "}
              {city ? city.charAt(0).toUpperCase() + city.slice(1) : ""} – Personalized
              Sessions for Your Well-Being
            </h1>

            <p className="text-sm sm:text-base md:text-lg font-serif mt-4 text-gray-800 leading-relaxed">
              Looking for a personal yoga trainer at home in{" "}
              {city ? city.charAt(0).toUpperCase() + city.slice(1) : ""}? Whether you're a
              senior wanting to stay active, a woman seeking relaxation and strength, or
              a man looking to enhance flexibility and fitness — we've got you covered.
              Enjoy one-on-one yoga training from expert instructors in the comfort of
              your home. Stay fit, stress-free, and energized – on your schedule! Book a
              session today!
            </p>
          </div>


        {/* section 2 */}
        <div className="px-6 sm:px-10 md:px-20 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                className="rounded-md h-[40vh] sm:h-[60vh] md:h-[85vh] w-full object-cover"
                src="https://images.unsplash.com/photo-1608857846810-ef2632cd75bd?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Yoga Trainer"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 md:p-10">
              <h1 className="text-2xl sm:text-3xl font-semibold text-[#132c4cf7] mb-6">
                Personal Yoga Trainer at Home
              </h1>

              <div className="space-y-5 text-gray-800">
                <div>
                  <h2 className="text-lg font-serif font-semibold">
                    ✅ Certified & Experienced Instructors
                  </h2>
                  <p>Learn from professional yoga trainers.</p>
                </div>

                <div>
                  <h2 className="text-lg font-serif font-semibold">
                    ✅ Personalized Yoga Sessions
                  </h2>
                  <p>From beginners to advanced levels, customized for your needs.</p>
                </div>

                <div>
                  <h2 className="text-lg font-serif font-semibold">
                    ✅ For All Ages & Genders
                  </h2>
                  <p>Yoga tailored for seniors, women, men, and kids.</p>
                </div>

                <div>
                  <h2 className="text-lg font-serif font-semibold">
                    ✅ Flexible & Convenient
                  </h2>
                  <p>Train at your home, on your schedule.</p>
                </div>

                <div>
                  <h2 className="text-lg font-serif font-semibold">
                    ✅ Male & Female Trainers Available
                  </h2>
                  <p>Choose a trainer that suits your comfort.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* section 3 */}
        <div className="px-6 sm:px-10 md:px-[8vw] mt-10 flex flex-col items-center md:items-start lg:mt-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif text-[#132c4cf7] text-center md:text-left leading-snug">
            Personal Yoga Trainer at Home in{" "}
            {city ? city.charAt(0).toUpperCase() + city.slice(1) : ""} – Pricing & Packages
          </h1>

            <hr className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4 rounded-full" />

            <div className="w-full flex justify-center">
              <RateCards />
            </div>
        </div>


        {/* section 4 */}
        <div className="mx-[6vw] sm:mx-[8vw] mt-10 flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-semibold font-serif text-[#132c4cf7] text-center sm:text-left">
            Introducing Home Yoga Classes in{" "}
            {city ? city.charAt(0).toUpperCase() + city.slice(1) : ""}
          </h1>

          <hr className="h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4" />

          <div className="space-y-6">
            {HomeYogaClasses.map((slide, index) => (
              <ContentSlide
                key={index}
                Title={slide.Title}
                Content={slide.Content}
                Page={page}
                city={city}
              />
            ))}
          </div>
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
    </>
  )
}

export default YogaClassesHome