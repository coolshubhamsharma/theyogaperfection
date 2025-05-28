
import { useForm, ValidationError } from '@formspree/react';  
import { useEffect, useRef } from 'react';

const GetInTouch = () => {

  const [state, handleSubmit] = useForm("xeoavzpn");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      alert("Thank you for contacting me, I will get back to you ASAP!");

      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (subjectRef.current) subjectRef.current.value = '';
      if (messageRef.current) messageRef.current.value = '';
    }
  }, [state.succeeded]);

  return (
    <div>
        <div className="flex justify-between m-[8vw] mt-8">
        <div className="w-[40vw]">
          <img className="rounded-md" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className="card shadow-lg w-[40vw] bg-white">
          <h1 className=" mt-3 text-3xl font-semibold ml-5 text-[#132c4cf7]">Get In Touch</h1>
          <form onSubmit={handleSubmit} action="https://formspree.io/f/xeoavzpn" method='POST' className=" ml-6 mt-2">
            <fieldset className="fieldset">
              <label htmlFor='name' className="fieldset-legend text-lg text-gray-800">Your Name </label>
              <input type="text" className="input" placeholder="Name" id='name' name='name' ref={nameRef}/>
              <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              />
            </fieldset>

            <fieldset className="fieldset mt-1">
              <label htmlFor='email' className="fieldset-legend text-lg text-gray-800">Your Email </label>
              <input type="email" id='email' name='email' className="input" placeholder="Email" ref={emailRef}/>
              <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              />
            </fieldset>

            <fieldset className="fieldset mt-1">
              <label htmlFor='subject' className="fieldset-legend text-lg text-gray-800">Subject </label>
              <input type="text" id='subject' className="input" name='subject' placeholder="Type here" ref={subjectRef}/>
              <ValidationError 
              prefix="Subject" 
              field="subject"
              errors={state.errors}
              />
            </fieldset>

            <fieldset className="fieldset mt-1">
              <label htmlFor='message' className="fieldset-legend text-lg text-gray-800">Your Message </label>
              <textarea id='message' name='message' className="input h-[30vh]" placeholder="Type here" ref={messageRef}/>
              <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              />
            </fieldset>

            <button className='btn hover:bg-black hover:text-white' type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>        
      </div>
    </div>
  )
}

export default GetInTouch