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
    <div className="overflow-hidden">
      {/* <div className={`z-10 transition-all duration-300 ${
        isScrolled ? "fixed " : "sticky "
      }`}>
        <Navbar/>
      </div>   */}
      
      <Navbar/>

        <Carousel/>

        <div className="m-10">
          <h1 className="text-4xl text-center m-8 font-semibold text-[#132c4cf7]">Begin Your Journey Of Yoga With 'The Yoga Perfection'</h1>
          <h2 className="text-3xl text-center m-8 text-[#132c4cf7]">With Home Yoga classes</h2>
          <h2 className="text-3xl text-center m-8 text-[#132c4cf7]">Practice yoga, meditation and breathwork.</h2>
        </div>
        
        <div className="m-10 ml-20 mr-20">
          <Cards/>
        </div>

        <div className="mb-[20vh]">
          <CalloutSection/>
        </div>

        <div className="">
          <YogaBenefits/>
        </div>

        <div className="mb-[20vh]">
        <h1 className="text-4xl text-center font-semibold text-[#132c4cf7]">Blogs</h1>
        <div className="ml-20 mr-20 flex justify-between"> 
          {blogs.filter((blog)=>blog.category === "Yoga").slice(0,3).map((blog , index)=>{ {/*the filter method is returning the  */}
                                  return(
                                      <BlogCard key={index} Category={blog.category} Image={blog.MainImg} Date={blog.Date} Title={blog.BlogTitle} CatchPhrase={blog.CatchPhrase} Author={blog.Author}  AuthorImg={blog.AuthorImg} Para1={blog.Para1} Image1={blog.Img1} Para2={blog.Para2} Para3={blog.Para3} YoutubeVideo={blog.YoutubeVideo} SubHeading1={blog.SubHeading1} SubPara1={blog.Sub2Para1} Sub1Image={blog.Sub1Image} SubHeading2={blog.SubHeading2} Sub2Para1={blog.Sub2Para1} Sub2Image={blog.Sub2Image} SubHeading3={blog.SubHeading3} Sub3Para1={blog.Sub3Para1} Sub3Image={blog.Sub3Image} SubHeading4={blog.SubHeading4} Sub4Para1={blog.Sub4Para1} Sub4Para2={blog.Sub4Para2} Sub4Image={blog.Sub4Image} />
                                  )
                                  })}
        </div>
        </div>

        <div className="m-10">
          <h1 className="text-5xl text-center m-8 font-semibold text-[#132c4cf7]">Happy Customers</h1>
          <h1 className="text-2xl text-center m-8 text-[#132c4cf7]">what our clients say about us!!</h1>
        </div>
        <div className="flex m-10 mr-20 ml-20 justify-between">
          {Client.map((client,index) =>(
            <Customers key={index} Name={client.Name} company={client.Company} views={client.Views}/>
          ) )}
        </div>

        <div>
          <CommunitySection/>
        </div>

        <div className=" bg-slate-50">
          <Footer/>
        </div>


    </div>
  )
}

export default Home