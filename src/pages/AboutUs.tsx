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
import { Helmet } from "react-helmet" 

// bg-amber-50
const AboutUs = () => {
  const title = "About Us";
  const category = "The Yoga Perfection";
  const description =
    "Learn about The Yoga Perfection – We provide a variety of yoga classes, including online, at-home, corporate, and studio sessions. Below, we highlight the key reasons why our services are the ideal choice for your yoga journey";
  const image = "https://images.unsplash.com/photo-1520769945061-0a448c463865?q=80&w=1470&auto=format&fit=crop";

  return (
    <>

      {/* SEO */}
      <Helmet>
        <title>{title} | {category}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="About The Yoga Perfection, Yoga community, Mindfulness, Wellness, Yoga instructors, Holistic health" />
        <meta property="og:title" content={`${title} | ${category}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theyogaperfection.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | ${category}`} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href="https://theyogaperfection.com/about" />
      </Helmet>

      <div className=" overflow-x-hidden">
        <div>
          <Navbar/>
        </div>

        <WhatsApp/>

        <div className="mt-[16vh]">
          <div className="text-center flex flex-col items-center px-6 py-12">
            <Yoga02Icon className="text-purple-700 mb-6" size={70} />
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#132c4cf7] mb-4">
              About Us
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#132c4cf7] leading-snug mb-8">
              Rejuvenating The Yogic Way of Living
            </h2>
            <p className="max-w-3xl mx-auto text-gray-500 font-medium text-base sm:text-lg">
              We provide a variety of yoga classes, including online, at-home, corporate, and studio sessions. Below, we highlight the key reasons why our services are the ideal choice for your yoga journey.
            </p>
          </div>


          <div>
            <AboutCards/>
          </div>

          <div>
            <CallOutSection2/>
          </div>
      
        </div>

        <div className="text-center flex flex-col items-center mt-32 px-6">
          <Yoga02Icon className="text-purple-700 mb-6" size={70} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#132c4cf7] mb-4">
            About Our Services
          </h1>
          
          <p className="text-gray-600 font-semibold max-w-3xl text-sm sm:text-base md:text-lg">
            We provide flexible class options tailored to fit your busy schedule, whether you prefer individual or group sessions at a location and time that suits you. Our goal is to deliver the best possible experience, building long-term relationships with our clients.
          </p>
        </div>


        <div className="mt-24 px-[8vw]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#132c4cf7] font-semibold text-left">
            Online Yoga Classes
          </h1>

          <p className="font-medium text-gray-600 text-sm sm:text-base mt-2">
            Join our online yoga classes with the best instructors at just Rs 999/month.
          </p>

          <hr className="h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-6" />

          <div className="mt-8">
            <OnlineYoga />
          </div>
        </div>


        <div className="mt-16 px-[8vw]">
          <h1 className="text-left text-2xl sm:text-3xl text-[#132c4cf7] font-semibold">
            Offline Yoga Classes
          </h1>
          <p className="font-medium text-gray-600 text-sm sm:text-base">
            Opt for the best yoga trainers at home in Delhi
          </p>
          <hr className="h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4" />

          <div className="mt-8">
            <OfflineYoga />
          </div>
        </div>


        <div className="mt-16 px-[8vw]">
          <h1 className="text-left text-2xl sm:text-3xl text-[#132c4cf7] font-semibold">
            Our Other Fitness Programs
          </h1>
          <p className="font-semibold text-gray-600 text-xs sm:text-sm mt-1">
            Opt for the best trainers at home or group classes in Delhi
          </p>

          <hr className="h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4" />

          <div>
            <OtherPrograms />
          </div>
        </div>


        <div className="mt-[20vh]">
          <CommunitySection/>
        </div>

        <div>
          <Footer/>
        </div>

      </div>
    </>
  )
}

export default AboutUs