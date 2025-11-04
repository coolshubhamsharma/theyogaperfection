const CallOutSection2 = () => {
  return (
    <div className="relative mb-20">
      <div className="bg-[url('https://images.unsplash.com/photo-1520769945061-0a448c463865?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center bg-fixed bg-no-repeat h-[77vh] flex items-center justify-center text-gray-200 relative">
        <div className="absolute inset-0 bg-[#070b2bb5]"></div>

        <div className="relative z-10 max-w-4xl px-6 sm:px-10 md:px-16">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-8 text-gray-100">
            About Our Work:
          </h1>
          <p className="font-semibold text-base sm:text-lg md:text-xl leading-relaxed text-gray-200">
            <span className="text-white font-bold">The Yoga Perfection</span> connects yoga teachers with clients, acting as a bridge between them. With a network of certified yoga instructors, we ensure clients receive personalized services based on their needs. Our business model is designed to provide these services at no additional cost to clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallOutSection2;
