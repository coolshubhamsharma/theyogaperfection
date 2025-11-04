import { Link } from "react-router-dom";

const RateCards = () => {
  const plans = [
    {
      title: "PER SESSION",
      price: "Starts From @600 (flexible)",
      points: ["Paid Demo", "1 Hour Session", "Experienced Trainer", "Premium Services"],
    },
    {
      title: "3 DAYS IN A WEEK",
      price: "Starts From @6000 (flexible)",
      points: [
        "500rs for demo (adjustable in monthly charges)",
        "1 Hour Session",
        "Every alternative day",
        "12 sessions in a month",
      ],
    },
    {
      title: "5 DAYS IN A WEEK",
      price: "Starts From @9000 (flexible)",
      points: [
        "500rs for demo (adjustable in monthly charges)",
        "1 Hour Session",
        "Monday to Friday",
        "20 sessions in a month",
      ],
    },
  ];

  return (
    <div className="mt-2 mb-10 flex flex-wrap justify-center gap-5">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="card shadow-lg bg-white w-[80vw] sm:w-[45vw] lg:w-[25vw] p-6 flex flex-col justify-between rounded-xl transition-transform duration-300 hover:scale-105"
        >
          <div>
            <h1 className="text-2xl font-serif font-bold tracking-wider text-left mt-2 text-[#A33D3D]">
              {plan.title}
            </h1>
            <h1 className="text-md font-serif text-left mt-4 font-semibold text-[#81B9B9]">
              {plan.price}
            </h1>
            <hr className="mt-5" />
          </div>

          <ul className="list-disc ml-5 mt-6 space-y-2 text-gray-700">
            {plan.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="flex justify-center mt-8">
            <Link
              to="https://whatsform.com/fdVCNE"
              className="btn w-full sm:w-[60%] font-serif font-semibold bg-[#F8F6EF] text-[#81B9B9] hover:text-white hover:bg-[#81B9B9] tracking-wider py-2 rounded-md text-center"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RateCards;
