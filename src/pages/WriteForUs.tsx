
// import SignIn from '../components/Auth/SignIn'
// import SignUp from '../components/Auth/SignUp'
import Navbar from '../components/Navbar'
import ContentSlide from '../components/OnlineYogaClasses.tsx/ContentSlide'
import { Guidelines } from '../assets/ClientInfo'
import CommunitySection from '../components/CommunitySection'
import Footer from '../components/Footer'


const WriteForUs = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>

      <h1 className='text-[#132c4cf7] font-serif text-4xl font-semibold ml-[8vw] mt-10'>Contribute To The Yoga Perfection</h1>

      {/* section 1 */}
      <div>
        <div className="flex justify-around m-[8vw] mt-8 max-h-[100vh]">
          <div className="w-[40vw]">
            <img className="rounded-md max-h-[100vh] w-[40vw]" src="https://images.unsplash.com/photo-1603525311500-eb9c62e3173f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div >
          <div className="card shadow-lg w-[35vw] bg-white">
            <h1 className=" mt-5 text-3xl font-bold ml-10 text-[#132c4cf7]">Posts are Welcome On The Topics Listed Below :-</h1>

            <ul className='ml-20 font-semibold font-serif text-xl flex flex-1 flex-col justify-evenly list-disc'>
              <li>Yoga</li>
              <li>Meditation</li>
              <li>Spirituality</li>
              <li>Health and Nutrition</li>
              <li>Ayurveda</li>
              <li>Fitness</li>
              <li>Lifestyle</li>
            </ul>
          </div>   
        </div>
      </div>

      {/* section 2 */}
      <div className='ml-[8vw] mr-[8vw]'>
        <h1 className='text-[#132c4cf7] font-serif text-4xl font-semibold  mt-10'>Submission Guidlines</h1>
        <hr className="h-[1px] mt-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4"></hr>
        <div className='flex flex-col'>
          {
            Guidelines.map((slide,index) => (
              <ContentSlide Title={slide.Tile} Content={slide.Content} key={index}/>
            ))
          }
        </div>
      </div>

      <CommunitySection/>

      <Footer/>

    </div>
  )
}

export default WriteForUs