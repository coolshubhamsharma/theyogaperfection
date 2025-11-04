
import BlogSection from '../components/Blog/BlogSection'
import CommunitySection from '../components/CommunitySection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from "react-router-dom";
import { blogs } from '../assets/ClientInfo'; 
import BlogMiddleComponent from '../components/Blog/BlogMiddleComponent';
import BlogPageComponent1 from '../components/Blog/BlogPageComponent1';
import Section2Component from '../components/Blog/Section 2/Section2Component';
import WhatsApp from '../components/Whatsapp/WhatsApp';
import { Helmet } from 'react-helmet';

const Blog = () => {
  return (
    <>

    <Helmet>
      <title>Yoga Blog | The Yoga Perfection</title>
      <meta
        name="description"
        content="Explore inspiring yoga blogs on mindfulness, health, and wellness. Learn yoga techniques, meditation practices, and holistic living tips from The Yoga Perfection."
      />
      <meta
        name="keywords"
        content="Yoga Blog, Mindfulness, Meditation, Wellness, The Yoga Perfection, Healthy Living"
      />
      <meta property="og:title" content="Yoga Blog | The Yoga Perfection" />
      <meta
        property="og:description"
        content="Discover expert yoga insights, meditation techniques, and lifestyle inspiration to enhance your well-being."
      />
      <meta
        property="og:image"
        content="https://theyogaperfection.in/static/blog-preview.jpg"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content="https://theyogaperfection.com/blogs"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480" />
    </Helmet>

    <div className='overflow-x-hidden' >
      <Navbar/>

      <WhatsApp/>

      {/* Section 1 */}
      <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap lg:justify-between px-[5vw] mb-12 mt-10">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-8 w-full lg:w-[20vw]">
          {blogs
            .filter((blog) => blog.category === "Spirituality")
            .slice(1, 3)
            .map((blog, index) => (
              <BlogPageComponent1 key={index} {...{
                Category: blog.category,
                Image: blog.MainImg,
                Date: blog.Date,
                Title: blog.BlogTitle,
                CatchPhrase: blog.CatchPhrase,
                Author: blog.Author,
                AuthorImg: blog.AuthorImg,
                Para1: blog.Para1,
                Image1: blog.Img1,
                Para2: blog.Para2,
                Para3: blog.Para3,
                YoutubeVideo: blog.YoutubeVideo,
                SubHeading1: blog.SubHeading1,
                SubPara1: blog.Sub2Para1,
                Sub1Image: blog.Sub1Image,
                SubHeading2: blog.SubHeading2,
                Sub2Para1: blog.Sub2Para1,
                Sub2Image: blog.Sub2Image,
                SubHeading3: blog.SubHeading3,
                Sub3Para1: blog.Sub3Para1,
                Sub3Image: blog.Sub3Image,
                SubHeading4: blog.SubHeading4,
                Sub4Para1: blog.Sub4Para1,
                Sub4Para2: blog.Sub4Para2,
                Sub4Image: blog.Sub4Image
              }} />
            ))}
        </div>

        {/* MIDDLE FEATURED CARD */}
        <div className="w-full lg:w-[45vw] flex justify-center">
          {blogs
            .filter((blog) => blog.category === "Meditation")
            .slice(0, 1)
            .map((blog, index) => (
              <BlogMiddleComponent key={index} {...{
                Category: blog.category,
                Image: blog.MainImg,
                Date: blog.Date,
                Title: blog.BlogTitle,
                CatchPhrase: blog.CatchPhrase,
                Author: blog.Author,
                AuthorImg: blog.AuthorImg,
                Para1: blog.Para1,
                Image1: blog.Img1,
                Para2: blog.Para2,
                Para3: blog.Para3,
                YoutubeVideo: blog.YoutubeVideo,
                SubHeading1: blog.SubHeading1,
                SubPara1: blog.Sub2Para1,
                Sub1Image: blog.Sub1Image,
                SubHeading2: blog.SubHeading2,
                Sub2Para1: blog.Sub2Para1,
                Sub2Image: blog.Sub2Image,
                SubHeading3: blog.SubHeading3,
                Sub3Para1: blog.Sub3Para1,
                Sub3Image: blog.Sub3Image,
                SubHeading4: blog.SubHeading4,
                Sub4Para1: blog.Sub4Para1,
                Sub4Para2: blog.Sub4Para2,
                Sub4Image: blog.Sub4Image
              }} />
            ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-8 w-full lg:w-[20vw]">
          {blogs
            .filter((blog) => blog.category === "Spirituality")
            .slice(3, 5)
            .map((blog, index) => (
              <BlogPageComponent1 key={index} {...{
                Category: blog.category,
                Image: blog.MainImg,
                Date: blog.Date,
                Title: blog.BlogTitle,
                CatchPhrase: blog.CatchPhrase,
                Author: blog.Author,
                AuthorImg: blog.AuthorImg,
                Para1: blog.Para1,
                Image1: blog.Img1,
                Para2: blog.Para2,
                Para3: blog.Para3,
                YoutubeVideo: blog.YoutubeVideo,
                SubHeading1: blog.SubHeading1,
                SubPara1: blog.Sub2Para1,
                Sub1Image: blog.Sub1Image,
                SubHeading2: blog.SubHeading2,
                Sub2Para1: blog.Sub2Para1,
                Sub2Image: blog.Sub2Image,
                SubHeading3: blog.SubHeading3,
                Sub3Para1: blog.Sub3Para1,
                Sub3Image: blog.Sub3Image,
                SubHeading4: blog.SubHeading4,
                Sub4Para1: blog.Sub4Para1,
                Sub4Para2: blog.Sub4Para2,
                Sub4Image: blog.Sub4Image
              }} />
            ))}
        </div>
      </div>

      
      {/* Section 2 */}
      <div className="flex flex-wrap items-center justify-center bg-[#F5F5F5] py-12 px-6 gap-10 md:gap-14">
        
        {/* Left Side (Ayurveda) */}
        <div className="flex flex-wrap justify-center gap-10">
          {blogs.filter((blog)=>blog.category === "Ayurveda").slice(0,2).map((blog, index)=>(
            <Section2Component key={index} Category={blog.category} Image={blog.MainImg} Date={blog.Date} Title={blog.BlogTitle} CatchPhrase={blog.CatchPhrase} Author={blog.Author} AuthorImg={blog.AuthorImg} Para1={blog.Para1} Image1={blog.Img1} Para2={blog.Para2} Para3={blog.Para3} YoutubeVideo={blog.YoutubeVideo} SubHeading1={blog.SubHeading1} SubPara1={blog.Sub2Para1} Sub1Image={blog.Sub1Image} SubHeading2={blog.SubHeading2} Sub2Para1={blog.Sub2Para1} Sub2Image={blog.Sub2Image} SubHeading3={blog.SubHeading3} Sub3Para1={blog.Sub3Para1} Sub3Image={blog.Sub3Image} SubHeading4={blog.SubHeading4} Sub4Para1={blog.Sub4Para1} Sub4Para2={blog.Sub4Para2} Sub4Image={blog.Sub4Image} />
          ))}
        </div>

        {/* Center Text */}
        <div className="flex flex-col items-center">
          <hr className="w-[30vw] md:w-[8vw] border-gray-400 mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold font-serif tracking-widest text-center">MUST</h1>
          <h1 className="text-3xl md:text-4xl font-bold font-serif tracking-widest text-center">READS</h1>
          <hr className="w-[30vw] md:w-[8vw] border-gray-400 mt-4" />
        </div>

        {/* Right Side (Health) */}
        <div className="flex flex-wrap justify-center gap-10">
          {blogs.filter((blog)=>blog.category === "Health").slice(0,2).map((blog, index)=>(
            <Section2Component key={index} Category={blog.category} Image={blog.MainImg} Date={blog.Date} Title={blog.BlogTitle} CatchPhrase={blog.CatchPhrase} Author={blog.Author} AuthorImg={blog.AuthorImg} Para1={blog.Para1} Image1={blog.Img1} Para2={blog.Para2} Para3={blog.Para3} YoutubeVideo={blog.YoutubeVideo} SubHeading1={blog.SubHeading1} SubPara1={blog.Sub2Para1} Sub1Image={blog.Sub1Image} SubHeading2={blog.SubHeading2} Sub2Para1={blog.Sub2Para1} Sub2Image={blog.Sub2Image} SubHeading3={blog.SubHeading3} Sub3Para1={blog.Sub3Para1} Sub3Image={blog.Sub3Image} SubHeading4={blog.SubHeading4} Sub4Para1={blog.Sub4Para1} Sub4Para2={blog.Sub4Para2} Sub4Image={blog.Sub4Image} />
          ))}
        </div>
      </div>


      {/* section 3 */}
      <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        {/* Title */}
        <h1 className="mt-20 mb-16 text-3xl md:text-4xl font-serif tracking-[0.3em] text-center font-bold text-[#132c4c]">
          LATEST
        </h1> 

        {/* Blog List */}
        <div className="flex flex-col items-center w-full gap-10">
          {blogs
            .filter((blog) => blog.category === "Yoga")
            .map((blog, index) => (
              <BlogSection
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

        {/* SEE ALL Button */}
        <Link to="/allblogs" className="mt-12">
          <button className="text-lg font-semibold bg-[#F8F6EF] text-[#81B9B9] hover:text-white hover:bg-[#81B9B9] tracking-wider px-8 py-3 rounded-md transition-all duration-300">
            SEE ALL
          </button>
        </Link>
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

export default Blog