import { useState } from "react"
import Navbar from "../components/Navbar"
import ShowBlogList from "../components/Admin/ShowBlogList";
import AddBlogs from "../components/Admin/AddBlogs";

const Admin = () => {

  const [menu,setMenu] = useState('AddBlogs');
  

  return (
    <div className="overflow-x-hidden">
        <Navbar/>

        <div className="flex">
            <div className="w-[25vw] border border-black h-[10vh]">
                <h1 className="text-2xl text-center font-serif mt-3 font-bold">The Yoga Perfection</h1>
            </div>
            <div className="flex flex-1 justify-center border border-black">
                <h1 className="text-2xl text-center font-serif mt-3 font-bold">Admin Panel</h1>
            </div>
        </div>

        <div className="flex">
            <div className={menu==='BlogList'? 'w-[25vw] h-[100vh] sm:w-[25vw]  relative py-12 border border-black' : 'w-[25vw] min-h-full sm:w-[25vw]  relative py-12 border border-black'}>
                    <div className='w-[50%] sm:w-[80%] absolute right-0'>
                        <h1 onClick={()=>setMenu('AddBlogs')} className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] mr-2 cursor-pointer'>
                        <p>Add Blogs</p>
                        </h1>
                        <h1 onClick={()=>setMenu('BlogList')} className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] mr-2 cursor-pointer'>
                            <p>Blog List</p>
                        </h1>
                        <h1 onClick={()=>setMenu('Subscriptions')} className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] mr-2 cursor-pointer'>
                            <p>Subscriptions</p>
                        </h1>
                        
                    </div>
            </div>
            <div className="flex flex-1 justify-start">
               {
                menu === 'BlogList'? (<ShowBlogList/>) : (<AddBlogs/>)
               }
               
            </div>
            
        </div>
    </div>
  )
}

export default Admin