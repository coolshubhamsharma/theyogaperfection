const YogaBenefits = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 mb-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-10 font-semibold text-[#132c4cf7]">
        Why Introduce Yoga Into Your Life?
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-1 w-full">
          <img
            className="rounded-lg w-full h-[250px] lg:h-[700px] sm:h-[350px] md:h-[450px] object-cover shadow-md"
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1528&auto=format&fit=crop"
            alt="Yoga Benefits"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 w-full space-y-6">
          <div className="shadow-lg p-5 rounded-lg hover:shadow-xl transition">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 hover:text-purple-500 cursor-pointer">
              Physical Wellbeing
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Yoga enhances physical well-being by improving flexibility, strength, and posture.
              It boosts circulation, reduces stress, and promotes better breathing. Regular practice
              helps with weight management, strengthens the immune system, and alleviates chronic
              pain. Additionally, yoga supports joint health, increases energy, and enhances overall
              body awareness.
            </p>
          </div>

          <div className="shadow-lg p-5 rounded-lg hover:shadow-xl transition">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 hover:text-purple-500 cursor-pointer">
              Spiritual Wellbeing
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Yoga nurtures spiritual well-being by fostering mindfulness, inner peace, and
              self-awareness. It deepens the connection between mind, body, and soul, promoting a
              sense of purpose and clarity. Through meditation and breath control, yoga helps
              transcend stress, cultivate gratitude, and awaken higher consciousness.
            </p>
          </div>

          <div className="shadow-lg p-5 rounded-lg hover:shadow-xl transition">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 hover:text-purple-500 cursor-pointer">
              Mental Wellbeing
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Yoga enhances mental well-being by reducing stress, anxiety, and depression. It
              improves focus, memory, and emotional resilience through breath control and
              mindfulness. Regular practice fosters mental clarity, promotes relaxation, and balances
              mood, cultivating a peaceful and positive mindset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaBenefits;
