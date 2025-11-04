import { useNavigate } from "react-router-dom";

type prop = {
  Category: string;
  Image: string;
  Date: string;
  Title: string;
  CatchPhrase: string;
  Author: string;
  AuthorImg: string;
  Para1: string;
  Image1: string;
  Para2: string;
  Para3: string;
  YoutubeVideo: string;
  SubHeading1: string;
  SubHeading2: string;
  SubPara1: string;
  Sub1Image: string;
  Sub2Para1: string;
  Sub2Image: string;
  SubHeading3: string;
  Sub3Para1: string;
  Sub3Image: string;
  SubHeading4: string;
  Sub4Para1: string;
  Sub4Para2: string;
  Sub4Image: string;
};

const BlogMiddleComponent = (props: prop) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/showblog", { state: { ...props } });
  };

  return (
    <div className="flex flex-col w-full sm:w-[85vw] lg:w-[44vw] mb-8 ">
      <img
        onClick={handleClick}
        src={props.Image}
        alt={props.Title}
        className="rounded-md w-full h-[45vh] sm:h-[55vh] object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
      />
      <div className="text-center mt-3">
        <h1
          onClick={handleClick}
          className="text-xl sm:text-3xl font-bold cursor-pointer hover:text-[#999285]"
        >
          {props.Title}
        </h1>
        <p className="text-base sm:text-lg mt-2 mx-3 text-gray-700">
          Spoiler alert: {props.CatchPhrase}
        </p>
        <p className="text-sm text-[#81B9B9] font-semibold mt-1 cursor-pointer hover:text-[#483D8B]">
          {props.Author}
        </p>
      </div>
    </div>
  );
};

export default BlogMiddleComponent;
