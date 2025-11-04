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
import { Helmet } from "react-helmet-async";


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
    <>
        {/* SEO */}
        <Helmet>
        <title>{Title} | {Category} Blog – The Yoga Perfection</title>
        <meta name="description" content={Para1} />
        <meta name="keywords" content={`${Category}, Yoga Blog, Wellness, Mindfulness`} />
        <meta property="og:title" content={Title} />
        <meta property="og:description" content={Para1} />
        <meta property="og:image" content={Image} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://theyogaperfection.com/blog/${encodeURIComponent(Title.toLowerCase().replace(/\s+/g, '-'))}`} />
        </Helmet>

        <div className="overflow-x-hidden">
            
            <Navbar/>

            <WhatsApp/>

            {/* section 1 */}
            <div className="mt-6 flex items-center justify-between px-[10vw]">
            {/* Breadcrumb Section */}
            <div className="flex items-center gap-3 text-gray-800">
                <Link to="">
                <h1 className="text-md font-bold font-serif hover:text-black transition-colors">Blogs</h1>
                </Link>
                <span className="text-gray-500">/</span>
                <Link to="">
                <h1 className="text-md font-bold font-serif hover:text-black transition-colors">
                    {Category}
                </h1>
                </Link>
            </div>

            {/* Bookmark Icon */}
            <button className="p-1 bg-gray-100 border rounded-lg hover:bg-gray-200 transition">
                <FiBookmark className="text-black size-[5vh]" />
            </button>
            </div>


            {/* section 2 */}
            <div className="mt-10 px-[5vw]">
                {/* Title + Meta */}
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">{Title}</h1>
                    <p className="text-lg sm:text-xl text-gray-400 font-serif mt-3 italic">"{CatchPhrase}"</p>
                    <p className="text-sm sm:text-md mt-4 text-gray-600">{Date}</p>
                </div>

                {/* Author Section */}
                <div className="flex flex-col items-center mt-8">
                    <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                        <img src={AuthorImg} alt="Author" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="font-semibold text-gray-500 tracking-tight">{Author}</h1>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <button className="flex items-center gap-2 border border-black rounded-2xl px-5 py-2 bg-transparent hover:bg-black hover:text-white transition">
                        <FaHandsClapping className="text-lg" /> High Five
                    </button>
                    <button className="flex items-center gap-2 border border-black rounded-2xl px-5 py-2 bg-transparent hover:bg-black hover:text-white transition">
                        <RiShareForwardLine className="text-xl" /> Share
                    </button>
                    </div>

                    {/* Image */}
                    <div className="mt-10">
                    <img
                        className="w-full max-w-[80vw] h-auto sm:h-[80vh] object-cover rounded-md"
                        src={Image}
                        alt="Blog"
                    />
                    </div>
                </div>
            </div>


            {/* section 3 */}
            <div className="mt-10 flex flex-col lg:flex-row justify-between gap-10 px-[6vw]">
            {/* subcolumn 1 */}
            <div className="flex-1 flex flex-col">
                <div className="border border-gray-300 shadow-sm p-5 rounded-md">
                <h1 className="text-lg">
                    Heading out the door? Read this article on the new The Yoga Perfection website.
                </h1>
                </div>

                <div className="mt-10 text-lg font-serif space-y-8">
                <p>{Para1}</p>
                <img className="w-full rounded-md object-cover" src={Image1} alt="" />
                <p>{Para2}</p>

                <YogaBanner />

                <p>{Para3}</p>

                <h1 className="text-2xl lg:text-3xl font-bold mt-10">{SubHeading1}</h1>
                <p>{SubPara1}</p>
                <img className="w-full rounded-md object-cover mt-5" src={Sub1Image} alt="" />

                <h1 className="text-2xl lg:text-3xl font-bold mt-10">{SubHeading2}</h1>
                <p>{Sub2Para1}</p>
                <img className="w-full rounded-md object-cover mt-5" src={Sub2Image} alt="" />

                <h1 className="text-2xl lg:text-3xl font-bold mt-10">{SubHeading3}</h1>
                <p>{Sub3Para1}</p>
                <img className="w-full rounded-md object-cover mt-5" src={Sub3Image} alt="" />

                <h1 className="text-2xl lg:text-3xl font-bold mt-10">{SubHeading4}</h1>
                <p>{Sub4Para1}</p>
                <img className="w-full rounded-md object-cover mt-5" src={Sub4Image} alt="" />
                <p>{Sub4Para2}</p>
                </div>
            </div>

            {/* subcolumn 2 */}
            <div className="flex flex-col lg:w-[25vw] w-full">
                <div className="bg-[#FAF8F3] p-5 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img src={AuthorImg} className="w-full h-full object-cover" alt="author" />
                    </div>
                    <h1 className="text-[#0383B9] text-xl font-bold">{Author}</h1>
                </div>
                <p className="mt-3 text-md">
                    {Author} is a Delhi-based Yoga and kriya yoga instructor connected with The Yoga Perfection for years, known for guiding yoga classes across domains, offering both personal and group sessions.
                </p>
                </div>

                <div className="bg-orange-50 p-5 rounded-xl mt-10 shadow-sm">
                <h1 className="text-xl font-semibold mb-4">Similar Reads</h1>
                <div className="flex flex-col gap-5">
                    {blogs
                    .filter((blog) => blog.category === Category)
                    .slice(0, 4)
                    .map((blog, index) => (
                        <BlogPallet
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
            </div>
            </div>


            <CommunitySection/>
            <Footer/>
        </div>
    </>
  )
}

export default ShowBlog