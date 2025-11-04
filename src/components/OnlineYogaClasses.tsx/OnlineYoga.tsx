const OnlineYoga = () => {
  const classes = [
    {
      title: "Cardio Female",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop",
      desc: "Join online class today with experienced and professional cardio yoga instructors from The Yoga Perfection."
    },
    {
      title: "Intense Yoga Workout",
      img: "https://plus.unsplash.com/premium_photo-1672352721889-ed3e09fa1624?q=80&w=1470&auto=format&fit=crop",
      desc: "If you’re short on time and want an intense yoga session, we bring expert-guided workouts at affordable prices."
    },
    {
      title: "Power Yoga",
      img: "https://images.unsplash.com/photo-1579566538101-636bbaed1b05?q=80&w=1470&auto=format&fit=crop",
      desc: "Learn from expert instructors in our online Power Yoga classes available anywhere, anytime."
    },
    {
      title: "Fitness Yoga",
      img: "https://plus.unsplash.com/premium_photo-1664299862634-72bf75a6b2b7?q=80&w=1470&auto=format&fit=crop",
      desc: "Perfect for working professionals — flexible online yoga sessions designed to fit your busy lifestyle."
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {classes.map((yoga, index) => (
        <div
          key={index}
          className="card bg-base-100 w-full sm:w-[45%] lg:w-[22%] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform"
        >
          <figure className="px-4 pt-4">
            <img
              src={yoga.img}
              alt={yoga.title}
              className="rounded-xl h-[30vh] w-full object-cover hover:scale-105"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#A33D3D]">{yoga.title}</h2>
            <p className="text-gray-600">{yoga.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnlineYoga;
