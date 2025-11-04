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

const BlogPallet = (props: prop) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/showblog", {
      state: { ...props },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-50 transition"
    >
      <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-24 lg:w-[8vw] lg:h-[6vw]">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={props.Image}
          alt={props.Title}
        />
      </div>
      <h1 className="text-sm sm:text-base md:text-md leading-snug tracking-tight font-medium text-gray-800 hover:text-[#81B9B9]">
        {props.Title}
      </h1>
    </div>
  );
};

export default BlogPallet;
