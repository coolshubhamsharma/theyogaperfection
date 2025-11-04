const OtherPrograms = () => {
  const programs = [
    {
      title: "Dance",
      img: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=1470&auto=format&fit=crop",
      desc: "Join the class today with experienced and professional dance instructors from The Yoga Perfection.",
    },
    {
      title: "Zumba",
      img: "https://images.unsplash.com/photo-1595033950840-84340c803643?q=80&w=1374&auto=format&fit=crop",
      desc: "If you’re short on time but care about fitness, our Zumba classes bring energy and fun at a very low cost.",
    },
    {
      title: "Aerobics",
      img: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=1470&auto=format&fit=crop",
      desc: "Learn from our expert Aerobics trainers with customized private sessions in your city, Delhi.",
    },
    {
      title: "General Workouts",
      img: "https://plus.unsplash.com/premium_photo-1663013224361-59a7076dc57d?q=80&w=1471&auto=format&fit=crop",
      desc: "Join our general fitness programs online — perfect for busy professionals who want to stay active anytime.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
      {programs.map((program, index) => (
        <div
          key={index}
          className="card bg-base-100 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <figure className="px-2 pt-4">
            <img
              src={program.img}
              alt={program.title}
              className="rounded-xl h-[27vh] w-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#A33D3D]">{program.title}</h2>
            <p>{program.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherPrograms;
