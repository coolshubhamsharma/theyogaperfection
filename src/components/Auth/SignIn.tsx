import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";

const SignIn = () => {
  return (
    <div className="card shadow-lg w-[38vw] bg-white">
              <h1 className=" mt-5 text-3xl font-bold ml-10 text-[#132c4cf7]">Sign In</h1>
              <form action="" className=" ml-10 mt-5">
    
                <fieldset className="fieldset mt-1">
                  <legend className="fieldset-legend text-lg text-gray-800"> Email </legend>
                  <input type="email" className="input w-[28vw] rounded-lg" placeholder="Email" />
                </fieldset>
    
                <fieldset className="fieldset mt-1">
                  <legend className="fieldset-legend text-lg text-gray-800">Password </legend>
                  <input type="text" className="input w-[28vw] rounded-lg" placeholder="Type here" />
                </fieldset>
    
                <button className="h-[7vh] w-[28vw] shadow-lg mt-5 rounded-lg p-2 text-white bg-black text-lg hover:text-black hover:bg-white">Sign up</button>
    
                <hr className="h-[1px] w-[28vw] mt-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-4"></hr>
                
    
                <div className=" h-[8vh] w-[28vw] shadow-lg mt-8 rounded-lg p-2 bg-slate-100 flex justify-center gap-2 cursor-pointer hover:bg-black hover:text-white">
                    <FcGoogle className="size-[4vh] mt-[3px]"/>
                    <h1 className="text-lg">Sign up with Google</h1>
                </div>
                <div className=" h-[8vh] w-[28vw] shadow-lg mt-4 rounded-lg p-2 bg-slate-100 flex justify-center gap-2 cursor-pointer hover:bg-black hover:text-white">
                    <ImFacebook2 className="size-[4vh] mt-[3px] text-blue-500"/>
                    <h1 className="text-lg">Sign up with Facebook</h1>
                </div>
                <div className="w-[28vw] flex justify-center gap-2 mt-2">
                <h1 className="">Don't have an account?</h1>
                <h1 className="hover:underline cursor-pointer">Sign In</h1>
                </div>
              </form>
            </div>  
  )
}

export default SignIn