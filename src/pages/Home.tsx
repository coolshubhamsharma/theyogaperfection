import CalloutSection from "../components/CalloutSection"
import Cards from "../components/Cards"
import Carousel from "../components/Carousel"
import Customers from "../components/Customers"
import Navbar from "../components/Navbar"
import YogaBenefits from "../components/YogaBenefits"
import {Client} from '../assets/ClientInfo'
import CommunitySection from "../components/CommunitySection"
import BlogCard from "../components/BlogCard"
import Footer from "../components/Footer"
import { blogs } from "../assets/ClientInfo"
import WhatsApp from "../components/Whatsapp/WhatsApp"
import {Helmet} from "react-helmet"
// import { useState, useEffect } from "react";


const Home = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollThreshold = window.innerHeight * 0.4; // 5% of viewport height
  //     setIsScrolled(window.scrollY > scrollThreshold);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>The Yoga Perfection – Online & Home Yoga Classes in Delhi NCR</title>
        <meta
          name="description"
          content="Join The Yoga Perfection for personalized home yoga classes, meditation sessions, and wellness programs across India. Certified trainers for every age."
        />
        <meta name="keywords" content="Yoga, Home Yoga, Meditation, Wellness, Fitness" />
        <meta property="og:title" content="The Yoga Perfection – Home Yoga Classes" />
        <meta property="og:description" content="Personal yoga trainers at home – flexible timings, certified instructors, complete wellness." />
        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:url" content="https://theyogaperfection.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://theyogaperfection.com" />
      </Helmet>

      <div className="overflow-hidden">


        {/* <div className={`z-10 transition-all duration-300 ${
          isScrolled ? "fixed " : "sticky "
        }`}>
          <Navbar/>
        </div>   */}
        
        <Navbar/>

        <WhatsApp/>

          <Carousel/>

          <div className="px-4 py-8 text-center text-[#132c4cf7]">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-snug mb-4">
              Begin Your Journey of Yoga With <span className="text-[#483D8B]">'The Yoga Perfection'</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3">
              With Home Yoga Classes
            </h2>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium">
              Practice yoga, meditation, and breathwork.
            </h2>
          </div>

          
          <div className="m-5 md:m-10 md:ml-20 md:mr-20">
            <Cards/>
          </div>

          <div className="mb-[20vh]">
            <CalloutSection/>
          </div>

          <div className="">
            <YogaBenefits/>
          </div>

          <div className="px-4 sm:px-8 md:px-16 lg:px-20 mb-20">
            {/* Section Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 text-[#132c4cf7]">
              Blogs
            </h1>

              {/* Blog Grid */}
                <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {blogs
                  .filter((blog) => blog.category === "Yoga")
                  .slice(0, 3)
                  .map((blog, index) => (
                    <BlogCard
                      key={index}
                      Category={blog.category}
                      Image={blog.MainImg}
                      Date={blog.Date}
                      Title={blog.BlogTitle}
                      CatchPhrase={blog.CatchPhrase}
                      Author={blog.Author}
                      AuthorImg={blog.AuthorImg}
                      Para1={blog.Para1}
                      Image1={blog.Img1}
                      Para2={blog.Para2}
                      Para3={blog.Para3}
                      YoutubeVideo={blog.YoutubeVideo}
                      SubHeading1={blog.SubHeading1}
                      SubPara1={blog.Sub2Para1}
                      Sub1Image={blog.Sub1Image}
                      SubHeading2={blog.SubHeading2}
                      Sub2Para1={blog.Sub2Para1}
                      Sub2Image={blog.Sub2Image}
                      SubHeading3={blog.SubHeading3}
                      Sub3Para1={blog.Sub3Para1}
                      Sub3Image={blog.Sub3Image}
                      SubHeading4={blog.SubHeading4}
                      Sub4Para1={blog.Sub4Para1}
                      Sub4Para2={blog.Sub4Para2}
                      Sub4Image={blog.Sub4Image}
                    />
                  ))}
                  </div>
          </div>


          <div className="px-4 sm:px-10 md:px-20 my-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold text-[#132c4cf7] mb-4">
              Happy Customers
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-center text-[#132c4cf7] mb-10">
              What our clients say about us!
            </h2>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {Client.map((client, index) => (
                <Customers
                  key={index}
                  Name={client.Name}
                  company={client.Company}
                  views={client.Views}
                />
              ))}
            </div>
          </div>


          <div>
            <CommunitySection/>
          </div>

          <div className=" bg-slate-50">
            <Footer/>
          </div>


      </div>
    </>
  )
}

export default Home