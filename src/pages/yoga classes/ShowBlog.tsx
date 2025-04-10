import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { RiShareForwardLine } from "react-icons/ri";
import { FiBookmark } from "react-icons/fi";
import { FaHandsClapping } from "react-icons/fa6";
// import { FiPlusCircle } from "react-icons/fi";
import BlogPallet from "../../components/Blog/BlogPallet";
import YogaBanner from "../../components/Blog/YogaBanner";
import CommunitySection from "../../components/CommunitySection";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import { blogs } from "../../assets/ClientInfo";
import WhatsApp from "../../components/Whatsapp/WhatsApp";


const ShowBlog = () => {

  const { state } = useLocation();
  const { Category,
    Image,
    Date,
    Title,
    CatchPhrase,
    Author,
    AuthorImg,
    Para1,
    Image1,
    Para2,
    Para3,
    // YoutubeVideo,
    SubHeading1,
    SubHeading2,
    SubPara1,
    Sub1Image,
    Sub2Para1,
    Sub2Image,
    SubHeading3,
    Sub3Para1,
    Sub3Image,
    SubHeading4,
    Sub4Para1,
    Sub4Para2,
    Sub4Image,} = state;

  return (
    <div className="overflow-x-hidden">
        
        <Navbar/>

        <WhatsApp/>

        {/* section 1 */}
        <div className="mt-6 flex justify-between ml-[10vw] mr-[10vw]">
            <div className="flex gap-3 text-gray-800">
                <Link to=""><h1 className="text-md font-bold font-serif">Blogs</h1></Link>
                <span className="text-gray-500">/</span>
                <Link to=""><h1 className="text-md font-bold font-serif">{Category}</h1></Link>
            </div> 

            <div className="">
            <FiBookmark className="text-black font-bold size-[5vh] rounded-lg border p-1 bg-gray-100" />
            
            </div>
        </div>

        {/* section 2 */}
        <div className="mt-10">
            <div>
                <h1 className="text-4xl font-bold text-center text-gray-800">{Title}</h1>
                <i><p className="text-center text-xl text-gray-400 font-serif mt-3">"{CatchPhrase}"</p></i>
                <p className="text-center text-md mt-5 text-gray-600">{Date}</p>
            </div>
            <div className="flex flex-col items-center mt-8">
                <div className="avatar flex gap-3">
                    <div className="w-[3vw] rounded-full">
                        <img src={AuthorImg} />
                    </div>
                    <h1 className="text-center align-bottom pt-3 font-semibold text-gray-500 tracking-tighter">{Author}</h1>
                    {/* <button className="btn w-[5vw] h-[4vh] rounded-full bg-yellow-400 mt-3">Follow</button> */}
                </div>
                <div className="mt-10 flex justify-center gap-5">
                    <button className="btn rounded-2xl h-[6vh] border border-black bg-transparent"><FaHandsClapping className="size-[1vw]"/>High Five</button>
                    <button className="btn rounded-2xl h-[6vh] border border-black bg-transparent"><RiShareForwardLine className="size-[2vw]"/>Share</button>
                </div>
                <div className="ml-[9vw] mr-[9vw] mt-10">
                    <img className="h-[100vh] w-[80vw] rounded-sm" src={Image} alt="" />

                </div>    
            </div>
        </div>

        {/* section 3 */}
        <div className="mt-10 flex justify-between ml-[9vw] mr-[9vw] gap-11">
            {/* subcolumn 1 */}
            <div className="w-[55vw] flex flex-col">
                <div className="h-[18vh] w-full border border-gray-300 card shadow-sm p-5">
                    <h1 className="text-lg">Heading out the door? Read this article on the new The Yoga Perfection website.</h1>
                </div>
                <div className="mt-10 text-lg font-serif">
                    <h1>
                    {Para1}
                    </h1>
                </div>
                {/* picture 1 */}
                <div className="mt-5">
                            <img className="h-[72vh] w-full" src={Image1} alt="" />
                </div>
                <div className="mt-10 text-lg font-serif">
                    <h1>
                    {Para2}
                    </h1>
                </div>
                <YogaBanner/>
                <div className="mt-6 text-lg font-serif">
                    <h1>
                    {Para3}
                    </h1>
                </div>
                {/* youtube video */}
                {/* <div className="mt-6">
                    <iframe className="w-full h-[72vh]" width="560" height="315" src={YoutubeVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div> */}
                {/* subheading 1 */}
                <h1 className="text-3xl font-bold mt-10">{SubHeading1}</h1>
                <div className="mt-6 text-lg font-serif">
                    <h1>
                    {SubPara1}
                    </h1>
                </div>
                {/* picture 2 */}
                <div className="mt-5">
                    <img className="h-[72vh] w-full" src={Sub1Image} alt="" />
                </div>
                {/* subheading 2 */}
                <h1 className="text-3xl font-bold mt-10">{SubHeading2}</h1>
                <div className="mt-6 text-lg font-serif">
                    <h1>
                    {Sub2Para1}
                    </h1>
                </div>
                {/* <div className="mt-6 text-lg font-serif">
                    <h1>
                   {Sub2Para2}
                    </h1>
                </div> */}
                {/* picture 3 */}
                <div className="mt-5">
                    <img className="h-[72vh] w-full" src={Sub2Image} alt="" />
                </div>
                {/* subheading 3 */}
                <h1 className="text-3xl font-bold mt-10">{SubHeading3}</h1>
                <div className="mt-6 text-lg font-serif">
                    <h1>
                    {Sub3Para1}
                    </h1>
                </div>
                {/* picture 4 */}
                <div className="mt-5">
                    <img className="h-[72vh] w-full" src={Sub3Image} alt="" />
                </div>
                {/* <div className="mt-6 text-lg font-serif">
                    <h1>
                    
                    </h1>
                </div> */}
                {/* subheading 4 */}
                <h1 className="text-3xl font-bold mt-10">{SubHeading4}</h1>
                <div className="mt-6 text-lg font-serif">
                    <h1>
                    {Sub4Para1}
                    </h1>
                </div>
                {/* picture 5 */}
                <div className="mt-5">
                    <img className="h-[72vh] w-full" src={Sub4Image} alt="" />
                </div>
                <div className="mt-6 text-lg font-serif">
                    <h1>
                    {Sub4Para2}
                    </h1>
                </div>
                
                {/* <div className="mt-6 text-lg font-serif">
                    <h1>

                    </h1>
                </div> */}



                
            </div>

            {/* subcolumn 2 */}
            <div className="flex flex-col w-[25vw] rounded-lg ">
                <div className="w-[24vw] h-[58vh] flex flex-col bg-[#FAF8F3] p-5 rounded-xl">
                    <div className="avatar flex justify-between">
                        <div className="w-[4vw] rounded-full">
                            <img src={AuthorImg} />
                        </div>
                        {/* <button className="hover:bg-white hover:text-black text-md btn text-white w-[10vw] h-[8vh] rounded-3xl bg-black"><FiPlusCircle className="size-[2vw] text-black bg-white rounded-full mr-1" />Follow</button> */}
                    </div>
                    <h1 className="text-[#0383B9] text-xl font-bold mt-2">{Author}</h1>
                    <h1 className="text-md mt-2">
                    {Author} is a Delhi-based Yoga and kriya yoga instructor. The Instructor is connected with the The Yoga Perfection for years and has shown great abilities when it comes to yoga classes. Specializes in multiple domains in yoga and provide personal and group classes as well as videos featuring yoga for athletes and mental health.
                    </h1>
                </div>
                <div className="w-[24vw] h-[80vh] mt-10 flex flex-col bg-orange-50 p-5 rounded-xl">
                    <h1 className="text-xl font-semibold text-left mt-1">Similar Reads</h1>
                    <div className="flex flex-col mt-4 justify-between flex-1">
                    {blogs.filter((blog)=>blog.category === Category).slice(0,4).map((blog , index)=>{ {/*the filter method is returning the  */}
                        return(
                            <BlogPallet key={index} Category={blog.category} Image={blog.MainImg} Date={blog.Date} Title={blog.BlogTitle} CatchPhrase={blog.CatchPhrase} Author={blog.Author}  AuthorImg={blog.AuthorImg} Para1={blog.Para1} Image1={blog.Img1} Para2={blog.Para2} Para3={blog.Para3} YoutubeVideo={blog.YoutubeVideo} SubHeading1={blog.SubHeading1} SubPara1={blog.Sub2Para1} Sub1Image={blog.Sub1Image} SubHeading2={blog.SubHeading2} Sub2Para1={blog.Sub2Para1} Sub2Image={blog.Sub2Image} SubHeading3={blog.SubHeading3} Sub3Para1={blog.Sub3Para1} Sub3Image={blog.Sub3Image} SubHeading4={blog.SubHeading4} Sub4Para1={blog.Sub4Para1} Sub4Para2={blog.Sub4Para2} Sub4Image={blog.Sub4Image} />
                        )
                        })}
                    </div>
                </div>

            </div>

        </div>

        <CommunitySection/>
        <Footer/>
    </div>
  )
}

export default ShowBlog