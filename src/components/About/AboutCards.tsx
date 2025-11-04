const AboutCards = () => {
  const cards = [
    {
      title: "Our Purpose:",
      text: "Our purpose is to cultivate a warm and inclusive environment where individuals can experience the transformative benefits of yoga. We are dedicated to offering a safe and supportive space that allows everyone to practice at their own pace while fostering connections within a like-minded community.",
    },
    {
      title: "Future Outlook:",
      text: "Our dream is to build a community of individuals dedicated to enhancing their lives through yoga. We aspire to create a world where everyone can access yoga’s transformative benefits, empowering them to live with compassion, resilience, and purpose. Our commitment lies in supporting our students in reaching their goals and fostering a more peaceful, connected, and joyful world.",
    },
    {
      title: "What We Stand For:",
      text: "Our service is built on authenticity, kindness, and growth. We see yoga as a powerful path to personal development and are dedicated to fostering a supportive, non-judgmental space for learning and self-discovery. We believe everyone has the potential to transform their lives through yoga, and we are here to guide and support them on their journey.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-10 px-10 py-20 bg-white">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card w-full sm:w-80 md:w-96 bg-base-100 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
          <div className="card-body">
            <h2 className="text-lg card-title text-gray-700 transition-all duration-200 hover:text-xl hover:text-purple-700 cursor-pointer">
              {card.title}
            </h2>
            <p className="text-gray-600 mt-2 leading-relaxed">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCards;
