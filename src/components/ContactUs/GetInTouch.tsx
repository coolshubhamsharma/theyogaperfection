

const GetInTouch = () => {
  return (
    <div>
        <div className="flex justify-between m-[8vw] mt-8">
        <div className="w-[40vw]">
          <img className="rounded-md" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className="card shadow-lg w-[40vw] bg-white">
          <h1 className=" mt-5 text-3xl font-semibold ml-5 text-[#132c4cf7]">Get In Touch</h1>
          <form action="" className=" ml-6 mt-10">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-lg text-gray-800">Your Name </legend>
              <input type="text" className="input" placeholder="Name" />
            </fieldset>

            <fieldset className="fieldset mt-2">
              <legend className="fieldset-legend text-lg text-gray-800">Your Email </legend>
              <input type="email" className="input" placeholder="Email" />
            </fieldset>

            <fieldset className="fieldset mt-2">
              <legend className="fieldset-legend text-lg text-gray-800">Subject </legend>
              <input type="text" className="input" placeholder="Type here" />
            </fieldset>

            <fieldset className="fieldset mt-2">
              <legend className="fieldset-legend text-lg text-gray-800">Your Message </legend>
              <textarea className="input h-[30vh]" placeholder="Type here" />
            </fieldset>
          </form>
        </div>        
      </div>
    </div>
  )
}

export default GetInTouch