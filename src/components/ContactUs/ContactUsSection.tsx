const ContactUsSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat 
                 bg-[url('https://images.unsplash.com/photo-1603987835113-841f232f6f70?q=80&w=1464&auto=format&fit=crop')]
                 mt-20 mb-[8vw] shadow-lg py-16"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#070b2b99]" />

      {/* Content */}
      <div className="relative z-10 max-w-[70vw] mx-auto px-6 md:px-12 text-white">
        <h1 className="text-4xl font-semibold">Contact Us:</h1>

        <p className="mt-4 leading-relaxed text-base md:text-lg">
          At <span className="font-semibold">The Yoga Perfection</span>, we appreciate your questions, feedback, 
          and insights. Feel free to reach out using the contact details below — 
          we're here to help in any way we can.
        </p>

        <h2 className="text-3xl font-semibold mt-8">Contact Info:</h2>

        <div className="mt-4 space-y-6">
          <div>
            <h3 className="text-2xl font-bold">Address:</h3>
            <p className="mt-2">Ramleela Ground, Sector 24, Rohini, Delhi - 110085</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Phone No:</h3>
            <p className="mt-2">+91 7419068920</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Email:</h3>
            <p className="mt-2">theyogaperfection@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
