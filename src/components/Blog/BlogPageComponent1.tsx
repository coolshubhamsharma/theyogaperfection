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

const BlogPageComponent1 = (props: prop) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/showblog", { state: { ...props } });
  };

  return (
    <div className="w-full sm:w-[45vw] lg:w-[20vw] mb-8 flex flex-col items-center text-center">
      <img
        onClick={handleClick}
        src={props.Image}
        alt={props.Title}
        className="rounded-md w-full h-[30vh] sm:h-[35vh] object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
      />
      <h1
        onClick={handleClick}
        className="text-lg sm:text-xl font-bold mt-2 cursor-pointer hover:text-[#999285]"
      >
        {props.Title}
      </h1>
      <p className="text-sm text-[#81B9B9] font-semibold mt-1 cursor-pointer hover:text-[#483D8B]">
        {props.Author}
      </p>
    </div>
  );
};

export default BlogPageComponent1;
