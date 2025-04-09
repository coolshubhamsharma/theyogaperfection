

interface question {
    Question:string;
    Answer:string;
    city?:string;
    isOpen?:boolean;
    onToggle:() => void;
}


const Question = (props:question) => {


  return (
    <div className="">
        <div className="ml-4 border m-1 rounded-sm p-3 flex flex-col justify-between">
        <h1 onClick={props.onToggle} className="text-md font-semibold font-serif text-gray-800 cursor-pointer">{props.Question.replace(/Noida/g, props.city ? props.city.charAt(0).toUpperCase() + props.city.slice(1) : "")}</h1>
        
        <div
        className={`overflow-hidden transition-all duration-500 ease-in ${
          props.isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-serif mt-2">
          {props.Answer.replace(/Noida/g, props.city ? props.city.charAt(0).toUpperCase() + props.city.slice(1) : "")}
        </p>
      </div>
        </div>

    </div>
  )
}

export default Question