const OfflineYoga = () => {
  const classes = [
    {
      title: "Trial Class (1 hour) @ Rs 600",
      desc: "The Yoga Perfection offers a trial class so you can ensure the personal trainer’s experience and energy match your vibe.",
      img: "https://plus.unsplash.com/premium_photo-1713908275457-425bc4948905?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "12 Classes Per Month @ Rs 5999",
      desc: "Opt for our 12-class training pack per month at just Rs 5999 and experience the joy of yoga Asanas with certified trainers.",
      img: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "16 Classes Per Month @ Rs 6999",
      desc: "Get trained by expert yoga professionals from The Yoga Perfection in your city, Delhi, with personalized home sessions.",
      img: "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "20 Classes Per Month @ Rs 7999",
      desc: "Join our premium plan with 20 personalized home classes per month — designed for working professionals and fitness lovers.",
      img: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {classes.map((cls, i) => (
        <div key={i} className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300">
          <figure className="px-2 pt-4">
            <img src={cls.img} alt={cls.title} className="rounded-xl h-[27vh] w-full object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#A33D3D]">{cls.title}</h2>
            <p className="text-gray-700 text-sm">{cls.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfflineYoga;
