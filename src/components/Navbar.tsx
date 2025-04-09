import { Link} from 'react-router-dom'
import logo from '../assets/logo.avif'


const Navbar = () => {
  return (
    <div className=" justify-between w-screen h-1/5 py-0 px-0 flex bg-[#483D8B]">
      <div className="mx-4 mb-0 ml-10"><img className="h-[120px] w-46 rounded-full p-2" src={logo} alt="" /></div>
      <div className="mx-10 items-center mt-[36px] ">
        <ul className="flex justify-between font-bold text-xl font-serif">
          <Link to="/" className=" hover:text-purple-700 text-white p-4 px-5 pb-10">Home</Link>
          <Link to="/about-us" className=" hover:text-purple-700 text-white p-4 px-5">About Us</Link>
          <div className="cursor-pointer dropdown dropdown-hover p-4 px-5">
            <Link to="/yoga-classes" className=" hover:text-purple-700 text-white rounded-field">Yoga Classes</Link>

              {/* <ul
                tabIndex={0}
                className="bg-slate-50 menu dropdown-content rounded-box z-1 w-80 p-2 mt-10 shadow-sm">
                  <Link className='hover:text-purple-700' to="/online-yoga-classes"><a>Online Yoga Classes</a></Link>
                  <Link className='hover:text-purple-700' to="/corporate-yoga-classes"><a>Corporate Yoga Classes</a></Link>
                  <Link className='hover:text-purple-700' to="/pregenancy-yoga-classes"><a>Pregenancy Yoga Classes</a></Link>
                  <Link className='hover:text-purple-700' to="/yoga-teacher-at-home"><a>Yoga Teacher At Home</a></Link>
                  <Link className='hover:text-purple-700' to="/our-yoga-studio"><a>Our Yoga Studio</a></Link>
              </ul> */}
          </div>
          <Link to="/contact-us" className="hover:text-purple-700 text-white p-4 px-5">Contact Us</Link>
          <Link to="/blog" className="hover:text-purple-700 text-white p-4 px-5">Blog</Link>
          <Link to="/write-for-us" className="hover:text-purple-700 text-white p-4 px-5">Write For Us</Link>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar