
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

const Blog = () => {
  return (
    <div className='overflow-x-hidden' >
      <Navbar/>

      <WhatsApp/>

      {/* section 1 */}
      <div className='flex justify-between ml-8 mr-7 mb-10'>
        <div className='flex p-5 flex-wrap w-[24vw]'>
        {blogs.filter((blog)=>blog.category === "Spirituality").slice(1,3).map((blog , index)=>{ {/*the filter method is returning the  */}
                                  return(
                                      <BlogPageComponent1 key={index} Category={blog.category} Image={blog.MainImg} Date={blog.Date} Title={blog.BlogTitle} CatchPhrase={blog.CatchPhrase} Author={blog.Author}  AuthorImg={blog.AuthorImg} Para1={blog.Para1} Image1={blog.Img1} Para2={blog.Para2} Para3={blog.Para3} YoutubeVideo={blog.YoutubeVideo} SubHeading1={blog.SubHeading1} SubPara1={blog.Sub2Para1} Sub1Image={blog.Sub1Image} SubHeading2={blog.SubHeading2} Sub2Para1={blog.Sub2Para1} Sub2Image={blog.Sub2Image} SubHeading3={blog.SubHeading3} Sub3Para1={blog.Sub3Para1} Sub3Image={blog.Sub3Image} SubHeading4={blog.SubHeading4} Sub4Para1={blog.Sub4Para1} Sub4Para2={blog.Sub4Para2} Sub4Image={blog.Sub4Image} />
                                  )
                                  })}
        </div>

        {blogs.filter((blog)=>blog.category === "Meditation").slice(0,1).map((blog , index)=>{ {/*the filter method is returning the  */}
                                  return(
                                      <BlogMiddleComponent key={index} Category={blog.category} Image={blog.MainImg} Date={blog.Date} Title={blog.BlogTitle} CatchPhrase={blog.CatchPhrase} Author={blog.Author}  AuthorImg={blog.AuthorImg} Para1={blog.Para1} Image1={blog.Img1} Para2={blog.Para2} Para3={blog.Para3} YoutubeVideo={blog.YoutubeVideo} SubHeading1={blog.SubHeading1} SubPara1={blog.Sub2Para1} Sub1Image={blog.Sub1Image} SubHeading2={blog.SubHeading2} Sub2Para1={blog.Sub2Para1} Sub2Image={blog.Sub2Image} SubHeading3={blog.SubHeading3} Sub3Para1={blog.Sub3Para1} Sub3Image={blog.Sub3Image} SubHeading4={blog.SubHeading4} Sub4Para1={blog.Sub4Para1} Sub4Para2={blog.Sub4Para2} Sub4Image={blog.Sub4Image} />
                                  )
                                  })}

        <div className='flex p-5 flex-wrap w-[25vw]'>
        {blogs.filter((blog)=>blog.category === "Spirituality").slice(3,5).map((blog , index)=>{ {/*the filter method is returning the  */}
                                  return(
                                      <BlogPageComponent1 key={index} Category={blog.category} Image={blog.MainImg} Date={blog.Date} Title={blog.BlogTitle} CatchPhrase={blog.CatchPhrase} Author={blog.Author}  AuthorImg={blog.AuthorImg} Para1={blog.Para1} Image1={blog.Img1} Para2={blog.Para2} Para3={blog.Para3} YoutubeVideo={blog.YoutubeVideo} SubHeading1={blog.SubHeading1} SubPara1={blog.Sub2Para1} Sub1Image={blog.Sub1Image} SubHeading2={blog.SubHeading2} Sub2Para1={blog.Sub2Para1} Sub2Image={blog.Sub2Image} SubHeading3={blog.SubHeading3} Sub3Para1={blog.Sub3Para1} Sub3Image={blog.Sub3Image} SubHeading4={blog.SubHeading4} Sub4Para1={blog.Sub4Para1} Sub4Para2={blog.Sub4Para2} Sub4Image={blog.Sub4Image} />
                                  )
                                  })}
        </div>
      </div>
      
      {/* section 2 */}
      <div className='flex justify-between h-[35vh] bg-[#F5F5F5] pl-8 pr-8'>
      {blogs.filter((blog)=>blog.category === "Ayurveda").slice(0,2).map((blog , index)=>{ {/*the filter method is returning the  */}
                                  return(
                                      <Section2Component key={index} Category={blog.category} Image={blog.MainImg} Date={blog.Date} Title={blog.BlogTitle} CatchPhrase={blog.CatchPhrase} Author={blog.Author}  AuthorImg={blog.AuthorImg} Para1={blog.Para1} Image1={blog.Img1} Para2={blog.Para2} Para3={blog.Para3} YoutubeVideo={blog.YoutubeVideo} SubHeading1={blog.SubHeading1} SubPara1={blog.Sub2Para1} Sub1Image={blog.Sub1Image} SubHeading2={blog.SubHeading2} Sub2Para1={blog.Sub2Para1} Sub2Image={blog.Sub2Image} SubHeading3={blog.SubHeading3} Sub3Para1={blog.Sub3Para1} Sub3Image={blog.Sub3Image} SubHeading4={blog.SubHeading4} Sub4Para1={blog.Sub4Para1} Sub4Para2={blog.Sub4Para2} Sub4Image={blog.Sub4Image} />
                                  )
                                  })}

        <div className='flex flex-col mt-10'>
          <hr className='w-[10vw]' />
          <h1 className='text-3xl font-bold mt-5 text-center font-serif tracking-widest'>MUST</h1>
          <h1 className='text-3xl font-bold mt-5 text-center font-serif tracking-widest'>READS</h1>
          <hr className='mt-5'/>

        </div>

        {blogs.filter((blog)=>blog.category === "Health").slice(0,2).map((blog , index)=>{ {/*the filter method is returning the  */}
                                  return(
                                      <Section2Component key={index} Category={blog.category} Image={blog.MainImg} Date={blog.Date} Title={blog.BlogTitle} CatchPhrase={blog.CatchPhrase} Author={blog.Author}  AuthorImg={blog.AuthorImg} Para1={blog.Para1} Image1={blog.Img1} Para2={blog.Para2} Para3={blog.Para3} YoutubeVideo={blog.YoutubeVideo} SubHeading1={blog.SubHeading1} SubPara1={blog.Sub2Para1} Sub1Image={blog.Sub1Image} SubHeading2={blog.SubHeading2} Sub2Para1={blog.Sub2Para1} Sub2Image={blog.Sub2Image} SubHeading3={blog.SubHeading3} Sub3Para1={blog.Sub3Para1} Sub3Image={blog.Sub3Image} SubHeading4={blog.SubHeading4} Sub4Para1={blog.Sub4Para1} Sub4Para2={blog.Sub4Para2} Sub4Image={blog.Sub4Image} />
                                  )
                                  })}
      </div>

      {/* section 3 */}
      <div>
      <h1 className='mt-20 mb-20 text-3xl font-serif tracking-[0.3em] text-center font-bold'>LATEST</h1> 
       {blogs.filter((blog)=> blog.category === "Yoga").map((blog , index)=>{ {/*the filter method is returning the  */}
                 return(
                  <BlogSection key={index} Category={blog.category} Image={blog.MainImg} Date={blog.Date} Title={blog.BlogTitle} CatchPhrase={blog.CatchPhrase} Author={blog.Author}  AuthorImg={blog.AuthorImg} Para1={blog.Para1} Image1={blog.Img1} Para2={blog.Para2} Para3={blog.Para3} YoutubeVideo={blog.YoutubeVideo} SubHeading1={blog.SubHeading1} SubPara1={blog.Sub2Para1} Sub1Image={blog.Sub1Image} SubHeading2={blog.SubHeading2} Sub2Para1={blog.Sub2Para1} Sub2Image={blog.Sub2Image} SubHeading3={blog.SubHeading3} Sub3Para1={blog.Sub3Para1} Sub3Image={blog.Sub3Image} SubHeading4={blog.SubHeading4} Sub4Para1={blog.Sub4Para1} Sub4Para2={blog.Sub4Para2} Sub4Image={blog.Sub4Image} />
                 )
               })}
       <div className='w-[60vw]'>
        <Link to="/allblogs"> <button className='btn text-lg block ml-[42vw] bg-[#F8F6EF] text-[#81B9B9] hover:text-white hover:bg-[#81B9B9] tracking-wider w-[10vw] h-[7vh]'>SEE ALL</button></Link>
       </div>
      </div>

      <div>
        <CommunitySection/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Blog