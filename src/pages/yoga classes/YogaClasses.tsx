import Navbar from "../../components/Navbar"
import BookNow from "../../components/OnlineYogaClasses.tsx/BookNow"
import { PytAtHome , CityColors} from "../../assets/ClientInfo"
import ContentSlide from "../../components/OnlineYogaClasses.tsx/ContentSlide"
import CommunitySection from "../../components/CommunitySection"
import Footer from "../../components/Footer"
import WhatsApp from "../../components/Whatsapp/WhatsApp"
import { Helmet } from "react-helmet-async"




const YogaClasses = () => {

  return (
    <>

      {/* SEO */}
      <Helmet>
        <title> Introducing  Yoga Classes At Home In Delhi NCR | Yoga Classes – The Yoga Perfection</title>
        <meta name="description" content='Step into a world where you can bring a yoga teacher right to your home—your gateway to wellness, harmony, and a healthier life, all within your personal space. ' />
        <meta name="keywords" content="Yoga classes, Online yoga, Yoga for beginners, Meditation, Flexibility, Mindfulness" />
        <meta property="og:title" content={`Introducing  Yoga Classes At Home In Delhi NCR |  Yoga Classes – The Yoga Perfection`} />
        <meta property="og:description" content='Our Home Yoga Classes provide a convenient solution, allowing you to experience the time-honored benefits of yoga without leaving your home.' />
        <meta property="og:image" content='https://plus.unsplash.com/premium_photo-1664053011445-e7c1e14cd8ba?q=80&w=1374&auto=format&fit=crop' />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theyogaperfection.com/yoga-classes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Introducing  Yoga Classes At Home In Delhi NCR | Yoga Classes – The Yoga Perfection`} />
        <meta name="twitter:description" content='Step into a world where you can bring a yoga teacher right to your home—your gateway to wellness, harmony, and a healthier life, all within your personal space. ' />
        <link rel="canonical" href="https://theyogaperfection.com/yoga-classes" />
      </Helmet>

      <div className="overflow-x-hidden">

        <Navbar/>

        <WhatsApp/>

        <div className="ml-[12vw] mr-[12vw]">
          <h1 className="text-4xl font-serif font-bold mt-20 text-[#132c4cf7] text-center">Introducing  Yoga Classes At Home In India</h1>
          <h1 className="text-md font-serif text-center mt-4">Step into a world where you can bring a yoga teacher right to your home—your gateway to wellness, harmony, and a healthier life, all within your personal space. In today’s busy world, prioritizing self-care isn’t always easy. Our Home Yoga Classes provide a convenient solution, allowing you to experience the time-honored benefits of yoga without leaving your home.</h1>
        </div>

        <div className="mx-[8vw] mt-12 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          <img
            className="rounded-md w-full sm:w-[80%] md:w-full h-[30vh] object-cover shadow-md hover:scale-105 transition-transform duration-300"
            src="https://plus.unsplash.com/premium_photo-1664053011445-e7c1e14cd8ba?q=80&w=1374&auto=format&fit=crop"
            alt="Yoga pose 1"
          />
          <img
            className="rounded-md w-full sm:w-[80%] md:w-full h-[30vh] object-cover shadow-md hover:scale-105 transition-transform duration-300"
            src="https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?q=80&w=1374&auto=format&fit=crop"
            alt="Yoga pose 2"
          />
          <img
            className="rounded-md w-full sm:w-[80%] md:w-full h-[30vh] object-cover shadow-md hover:scale-105 transition-transform duration-300"
            src="https://images.unsplash.com/photo-1600881333168-2ef49b341f30?q=80&w=1374&auto=format&fit=crop"
            alt="Yoga pose 3"
          />
        </div>


        <div className="mx-[8vw] sm:mx-[10vw] mt-20">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#132c4cf7] text-left">
            Where We Are Located
          </h1>
          <p className="text-base sm:text-lg font-medium font-serif mt-3 text-gray-700">
            We offer yoga classes across multiple cities in India, bringing wellness to your doorstep.
            Our professional trainers ensure you experience holistic growth wherever you are.
          </p>
          <hr className="h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4" />
        </div>


        <div className="mx-[10vw] flex flex-wrap justify-center gap-8 mt-10">
          {CityColors.map((city, index) => (
            <BookNow City={city.Name} key={index} />
          ))}
        </div>


        <div className="mx-[12vw] mt-20">
          <h1 className="text-4xl font-serif font-bold text-[#132c4cf7] text-left">
            Why Choose a Personal Yoga Trainer at Home?
          </h1>
          <hr className="h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4" />
          <div className="flex flex-col space-y-6">
            {PytAtHome.map((slide, index) => (
              <ContentSlide Title={slide.Title} Content={slide.Content} key={index} />
            ))}
          </div>
        </div>


        <div>
          <CommunitySection/>
        </div>

        <div>
          <Footer/>
        </div>

      </div>
    </>
  )
}

export default YogaClasses