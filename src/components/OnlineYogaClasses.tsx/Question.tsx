interface QuestionProps {
  Question: string;
  Answer: string;
  city?: string;
  isOpen?: boolean;
  onToggle: () => void;
}

const Question = (props: QuestionProps) => {
  const cityName = props.city
    ? props.city.charAt(0).toUpperCase() + props.city.slice(1)
    : "";

  return (
    <div className="mx-auto lg:mx-0 w-[90vw] sm:w-[80vw] lg:w-[60vw] mb-3">
      <div
        className="border border-gray-300 rounded-md p-4 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      >
        <h1
          onClick={props.onToggle}
          className="text-base sm:text-lg font-semibold font-serif text-[#132c4cf7] cursor-pointer flex justify-between items-center"
        >
          {props.Question.replace(/Noida/g, cityName)}
          <span className="text-[#81B9B9] ml-2">{props.isOpen ? "–" : "+"}</span>
        </h1>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            props.isOpen ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <p className="font-serif text-gray-700 leading-relaxed">
            {props.Answer.replace(/Noida/g, cityName)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
