
import { HelmetData } from "react-helmet-async"
import CommunitySection from "../components/CommunitySection"
import ContactUsSection from "../components/ContactUs/ContactUsSection"
import GetInTouch from "../components/ContactUs/GetInTouch"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import WhatsApp from "../components/Whatsapp/WhatsApp"
import YogaIcon from "../components/YogaIcon"
import { Helmet } from "react-helmet-async"


const ContactUs = () => {
  return (
    <>

    <Helmet>
      <title>Contact Us | The Yoga Perfection</title>
      <meta
        name="description"
        content="Get in touch with The Yoga Perfection for personalized yoga classes, corporate sessions, or home training. Reach us for expert guidance and wellness support."
      />
      <meta
        name="keywords"
        content="Contact The Yoga Perfection, Yoga Classes Contact, Yoga Instructor, Home Yoga, Corporate Yoga"
      />
      <meta property="og:title" content="Contact Us | The Yoga Perfection" />
      <meta
        property="og:description"
        content="Reach out to The Yoga Perfection to book yoga sessions, ask questions, or explore personalized training options."
      />
      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1603987835113-841f232f6f70?q=80&w=1464&auto=format&fit=crop"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://theyogaperfection.com/contact-us"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://theyogaperfection.com/contact-us" />
    </Helmet>

    <div className='overflow-x-hidden '>

      <Navbar/>

      <WhatsApp/>

      <div className="text-center mt-10 px-[8vw]">
        <div className="text-center flex flex-col items-center px-6 py-12">
          <YogaIcon/>
        </div>
        <h1 className="text-lg sm:text-xl font-semibold mt-2 text-[#132c4cf7]">Become A Yogi</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 mb-3 text-[#132c4cf7]">
          Your Path To A Healthy Life Begins Here
        </h1>
        <p className="mt-6 text-base sm:text-lg text-gray-700">
          Yoga, an ancient practice from India, has been cultivated for thousands of years. It integrates physical postures, breath control, meditation, and relaxation to enhance overall well-being. Regular practice offers numerous benefits for physical, mental, and emotional health.
        </p>
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
    </>

  )
}

export default ContactUs