import { useNavigate } from "react-router-dom";

type Props = {
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

const BlogCard = (props: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/showblog", { state: { ...props } });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white shadow-lg hover:shadow-2xl rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 w-full max-w-[22rem] sm:max-w-[24rem]"
    >
      {/* Image */}
      <div className="w-full h-48 sm:h-56 md:h-60 overflow-hidden">
        <img
          src={props.Image}
          alt={props.Title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 text-center">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#132c4cf7] line-clamp-2">
          {props.Title}
        </h2>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{props.CatchPhrase}</p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="btn btn-primary bg-blue-700 hover:bg-purple-800 border-none text-sm sm:text-base px-5 py-2 font-semibold rounded-full transition-all"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
