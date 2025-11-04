import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";

const GetInTouch = () => {
  const [state, handleSubmit] = useForm("xeoavzpn");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      alert("Thank you for contacting us! We’ll get back to you ASAP.");
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (subjectRef.current) subjectRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    }
  }, [state.succeeded]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between m-[8vw] mt-12 gap-10">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img
          className="rounded-xl w-full h-auto object-cover shadow-lg"
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop"
          alt="Yoga Contact"
        />
      </div>

      {/* Form Section */}
      <div className="card w-full md:w-1/2 bg-white shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-semibold text-[#132c4cf7] mb-6">
          Get In Touch
        </h1>

        <form onSubmit={handleSubmit} method="POST" className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-full"
              placeholder="Name"
              ref={nameRef}
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Email"
              ref={emailRef}
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="input input-bordered w-full"
              placeholder="Subject"
              ref={subjectRef}
              required
            />
            <ValidationError prefix="Subject" field="subject" errors={state.errors} />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="textarea textarea-bordered w-full h-[25vh]"
              placeholder="Type your message here..."
              ref={messageRef}
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="btn rounded-xl bg-[#132c4cf7] text-white hover:bg-black w-full mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
