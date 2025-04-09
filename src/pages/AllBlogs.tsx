import { useState } from "react"
import BlogSection from "../components/Blog/BlogSection"
import CommunitySection from "../components/CommunitySection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { blogs } from "../assets/ClientInfo"


const AllBlogs = () => {

  const [menu , setMenu] = useState("All");

  return (
    <div className="overflow-x-hidden">
        <Navbar/>

        <h1 className='mt-20 mb-20 text-3xl font-serif tracking-[0.3em] text-center font-bold'>ALL CONTENT</h1> 

        <div className='flex justify-center gap-6 my-10 mb-[10vh] text-lg'>
            <button onClick={()=>setMenu('All')} className={menu === 'All'?`bg-black text-white py-1 px-4 rounded-sm`:""}>All</button>
            <button onClick={()=>setMenu('Yoga')} className={menu === "Yoga"?`bg-black text-white py-1 px-4 rounded-sm`:""}>Yoga</button>
            <button onClick={()=>setMenu('Meditation')} className={menu === "Meditation"?`bg-black text-white py-1 px-4 rounded-sm`:""}>Meditation</button>
            <button onClick={()=>setMenu('Spirituality')} className={menu === "Spirituality"?`bg-black text-white py-1 px-4 rounded-sm`:""}>Spirituality</button>
            <button onClick={()=>setMenu('Ayurveda')} className={menu === "Ayurveda"?`bg-black text-white py-1 px-4 rounded-sm`:""}>Ayurveda</button>
            <button onClick={()=>setMenu('Health')} className={menu === "Health"?`bg-black text-white py-1 px-4 rounded-sm`:""}>Health & Nutrition</button>
            <button onClick={()=>setMenu('Fitness')} className={menu === "Fitness"?`bg-black text-white py-1 px-4 rounded-sm`:""}>Fitness</button>
            <button onClick={()=>setMenu('Lifestyle')} className={menu === "Lifestyle"?`bg-black text-white py-1 px-4 rounded-sm`:""}>Lifestyle</button>
        </div>

        
          {blogs.filter((blog)=> menu === "All" ? true : blog.category === menu).map((blog , index)=>{ {/*the filter method is returning the  */}
          return(
            <BlogSection key={index} Category={blog.category} Image={blog.MainImg} Date={blog.Date} Title={blog.BlogTitle} CatchPhrase={blog.CatchPhrase} Author={blog.Author}  AuthorImg={blog.AuthorImg} Para1={blog.Para1} Image1={blog.Img1} Para2={blog.Para2} Para3={blog.Para3} YoutubeVideo={blog.YoutubeVideo} SubHeading1={blog.SubHeading1} SubPara1={blog.Sub2Para1} Sub1Image={blog.Sub1Image} SubHeading2={blog.SubHeading2} Sub2Para1={blog.Sub2Para1} Sub2Image={blog.Sub2Image} SubHeading3={blog.SubHeading3} Sub3Para1={blog.Sub3Para1} Sub3Image={blog.Sub3Image} SubHeading4={blog.SubHeading4} Sub4Para1={blog.Sub4Para1} Sub4Para2={blog.Sub4Para2} Sub4Image={blog.Sub4Image} />
          )
        })}

        <CommunitySection/>
        <Footer/>
    </div>
  )
}

export default AllBlogs