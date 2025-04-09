
import CommunitySection from "../components/CommunitySection"
import ContactUsSection from "../components/ContactUs/ContactUsSection"
import GetInTouch from "../components/ContactUs/GetInTouch"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import YogaIcon from "../components/YogaIcon"


const ContactUs = () => {
  return (
    <div className='overflow-x-hidden '>

      <Navbar/>

      <div>
        <YogaIcon/>
        <h1 className="text-lg font-semibold text-center mt-2 mr-7 text-[#132c4cf7]">Become A Yogi</h1>
        <h1 className="text-5xl text-center font-bold mt-10 mb-2 text-[#132c4cf7]">Your Path To A Healthy Life Begins Here</h1>
        <p className="text-center mt-6 text-lg text-gray-700 ml-[8vw] mr-[8vw]">Yoga, an ancient practice from India, has been cultivated for thousands of years. It integrates physical postures, breath control, meditation, and relaxation to enhance overall well-being. Regular practice offers numerous benefits for physical, mental, and emotional health.</p>
      </div>

      <div>
        <ContactUsSection/>
      </div>

      <div className="ml-[8vw] mr-[8vw]">
        <h1 className="text-3xl font-semibold text-[#132c4cf7]">Have a Question or Feedback?</h1>
        <p className="mt-2 text-gray-700">Got questions about our yoga classes, instructors, or schedules? We’d love to hear from you! Just fill out the contact form below, and we’ll be happy to help. Your feedback and suggestions mean a lot to us—it helps us improve and create the best yoga experience for you.</p>
      </div>

      <div>
        <GetInTouch/>
      </div>

      <div className="ml-[8vw] mr-[8vw] overflow-hidden">
        <h1 className="text-3xl font-semibold text-[#132c4cf7]">Visit Us:</h1>
        <p className="mt-2 text-gray-700 mb-2">We encourage you to join our free yoga class in Ramleela Ground, Sector-24, Rohini to experience the serenity and positive energy in person. Whether you’re new to yoga or an experienced practitioner, our doors are open to welcome you.</p>
        
        <h1 className="text-3xl font-semibold mt-10 text-[#132c4cf7]">Location Map:</h1>

        <div className="mt-5 h-[80vh]"> 
          <iframe className="rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.7690348189867!2d77.08584287462264!3d28.72644767981129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07116437204b%3A0x8480ee7cb8033ce0!2sDDA%20RAMLEELA%20Ground!5e0!3m2!1sen!2sin!4v1742539714790!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="mt-2 text-gray-700">
        Thank you for choosing The Yoga Perfection as your yoga sanctuary. We’re excited to connect with you and support your journey towards wellness.
        </p>

        <p className="mt-10 text-gray-700">
        Feel free to get in touch—we're here to support you on your journey to health and happiness. Ram Ram!
        </p>
      </div>

      <div className="">
        <CommunitySection/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>

  )
}

export default ContactUs