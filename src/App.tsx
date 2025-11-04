import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Blog from "./pages/Blog"
import ContactUs from "./pages/ContactUs"
import WriteForUs from "./pages/WriteForUs"
import AllBlogs from "./pages/AllBlogs"
import YogaClasses from "./pages/yoga classes/YogaClasses"
import YogaClassesHome from "./pages/YogaClassesHome"
import ShowBlog from "./pages/yoga classes/ShowBlog"
import ScrollTop from "./components/Whatsapp/ScrollTop"
// import Admin from "./pages/Admin"


const App = () => {
  return (
    <div className="">
      
        <ScrollTop/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about-us"  element={<AboutUs/>} />
          <Route path="/blog"  element={<Blog/>} />
          <Route path="/contact-us"  element={<ContactUs/>} />
          <Route path="/write-for-us"  element={<WriteForUs/>} />
          <Route path="/allblogs"  element={<AllBlogs/>} />
          <Route path="/yoga-classes"  element={<YogaClasses/>} />
          <Route path="/home-yoga-classes/:city"  element={<YogaClassesHome/>} />
          <Route path="/showblog"  element={<ShowBlog/>} />
          {/* <Route path="/admin"  element={<Admin/>} /> */}
        </Routes>
      
    </div>
  )
}

export default App