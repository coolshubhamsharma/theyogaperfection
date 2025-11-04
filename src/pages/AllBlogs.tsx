import { useState } from "react"
import BlogSection from "../components/Blog/BlogSection"
import CommunitySection from "../components/CommunitySection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { blogs } from "../assets/ClientInfo"
import WhatsApp from "../components/Whatsapp/WhatsApp"
import { Helmet } from "react-helmet-async"


const AllBlogs = () => {

  const [menu , setMenu] = useState("All");
  const title = "All Blogs";
  const category = "The Yoga Perfection";
  const description =
    "Explore all yoga, meditation, spirituality, and wellness blogs from The Yoga Perfection. Find expert insights, holistic tips, and guides to help you lead a balanced and mindful life.";
  const image = "https://images.unsplash.com/photo-1696885233997-6148140ea69a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374";

  return (
    <>

    <Helmet>
        <title>{title} | {category}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Yoga blogs, Meditation, Spirituality, Ayurveda, Health and Nutrition, Fitness, Lifestyle, The Yoga Perfection" />
        <meta property="og:title" content={`${title} | ${category}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theyogaperfection.com/allblogs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | ${category}`} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href="https://theyogaperfection.com/allblogs" />
      </Helmet>

    <div className="overflow-x-hidden">
        <Navbar/>

        <WhatsApp/>

        <h1 className='mt-20 mb-20 text-3xl font-serif tracking-[0.3em] text-center font-bold'>ALL CONTENT</h1> 

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 my-8 mb-[10vh] text-base sm:text-lg px-4">
          {[
            "All",
            "Yoga",
            "Meditation",
            "Spirituality",
            "Ayurveda",
            "Health & Nutrition",
            "Fitness",
            "Lifestyle",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setMenu(item)}
              className={`py-1 px-4 rounded-sm font-medium transition-all duration-300 ${
                menu === item
                  ? "bg-black text-white"
                  : "text-gray-800 hover:text-black hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>


        
          {blogs.filter((blog)=> menu === "All" ? true : blog.category === menu).map((blog , index)=>{ {/*the filter method is returning the  */}
          return(
            <BlogSection key={index} Category={blog.category} Image={blog.MainImg} Date={blog.Date} Title={blog.BlogTitle} CatchPhrase={blog.CatchPhrase} Author={blog.Author}  AuthorImg={blog.AuthorImg} Para1={blog.Para1} Image1={blog.Img1} Para2={blog.Para2} Para3={blog.Para3} YoutubeVideo={blog.YoutubeVideo} SubHeading1={blog.SubHeading1} SubPara1={blog.Sub2Para1} Sub1Image={blog.Sub1Image} SubHeading2={blog.SubHeading2} Sub2Para1={blog.Sub2Para1} Sub2Image={blog.Sub2Image} SubHeading3={blog.SubHeading3} Sub3Para1={blog.Sub3Para1} Sub3Image={blog.Sub3Image} SubHeading4={blog.SubHeading4} Sub4Para1={blog.Sub4Para1} Sub4Para2={blog.Sub4Para2} Sub4Image={blog.Sub4Image} />
          )
        })}

        <CommunitySection/>
        <Footer/>
    </div>
    </>
  )
}

export default AllBlogs