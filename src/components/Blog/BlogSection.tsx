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

const BlogSection = (props: prop) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/showblog", { state: { ...props } });
  };

  return (
    <div className="mb-16 px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10 max-w-6xl mx-auto">
        {/* Image */}
        <div className="w-full md:w-[30%] flex-shrink-0">
          <img
            onClick={handleClick}
            className="w-full h-[30vh] md:h-[33vh] object-cover rounded-sm cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            src={props.Image}
            alt={props.Title}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between w-full md:w-[65%]">
          <h2 className="text-md font-semibold text-[#81B9B9] cursor-pointer hover:underline">
            {props.Category}
          </h2>

          <h1
            onClick={handleClick}
            className="text-xl md:text-2xl font-bold mt-2 cursor-pointer hover:text-[#999285]"
          >
            {props.Title}
          </h1>

          <p className="text-base md:text-lg mt-3 text-gray-800 leading-relaxed">
            {props.CatchPhrase}
          </p>

          <div className="mt-3 flex flex-wrap items-center text-gray-700">
            <span
              onClick={handleClick}
              className="text-sm font-semibold text-[#81B9B9] mr-4 cursor-pointer hover:text-[#483D8B]"
            >
              {props.Author}
            </span>
            <span className="text-sm">{props.Date}</span>
          </div>

          <hr className="mt-6 border-t border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
