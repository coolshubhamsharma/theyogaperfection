import { Link } from 'react-router-dom'
import logo from '../../assets/logo.avif'

const YogaBanner = () => {
  return (
    <div className="flex justify-between flex-row h-[18vh] w-full mt-5 bg-orange-50 card shadow-sm p-5">
                    <div className="flex gap-4 flex-row">
                    <img className="h-[13vh] w-[7vw] rounded-xl " src={logo} alt="" />
                    <h1 className="text-xl font-serif font-semibold pt-5">The Yoga Perfection</h1>
                    </div>
                    <button className="btn mt-2 h-[8vh] w-[13vw] bg-black text-white hover:text-black hover:bg-white"><Link to="https://whatsform.com/fdVCNE">Get Started Now</Link></button>
                </div>
  )
}

export default YogaBanner