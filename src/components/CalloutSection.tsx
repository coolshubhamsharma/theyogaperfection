import { Link } from 'react-router-dom'
import './Callout.css'

const CalloutSection = () => {
  return (
    <div>
        <div className=" self bg-cover bg-center bg-fixed bg-no-repeat h-[75vh] w-full flex items-center justify-center text-white relative" >
        <div className="absolute inset-0 bg-[#070b2be0]"></div>
        <div className='absolute mb-20 items-center m-10'>
            <h1 className='font-bold text-5xl mb-10'> Certified Yoga Professionals. Try Today!</h1>
            <h1 className='font-semibold text-center text-xl mb-10'>Unwind your body and mind , bring the studio to your home with our yoga classes.</h1>
        </div>
        <div className='absolute mt-[33vh]'>
        <button className='btn bg-purple-700 text-white font-bold h-[8vh] w-[16vw] text-lg hover:bg-blue-900'><Link to="https://whatsform.com/fdVCNE"> Get Started Now</Link></button>
        </div>

        </div>
    </div>
  )
}

export default CalloutSection