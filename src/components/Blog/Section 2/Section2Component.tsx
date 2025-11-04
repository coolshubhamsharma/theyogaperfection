import { useNavigate } from "react-router-dom";

type prop = {
  Category:string,
  Image:string,
  Date:string,
  Title:string,
  CatchPhrase:string,
  Author:string,
  AuthorImg:string,
  Para1:string,
  Image1:string,
  Para2:string,
  Para3:string,
  YoutubeVideo:string,
  SubHeading1:string,
  SubHeading2:string,
  SubPara1:string,
  Sub1Image:string,
  Sub2Para1:string,
  Sub2Image:string,
  SubHeading3:string,
  Sub3Para1:string,
  Sub3Image:string,
  SubHeading4:string,
  Sub4Para1:string,
  Sub4Para2:string,
  Sub4Image:string,

}

const Section2Component = (props:prop) => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/showblog", {
        state: {
          ...props
        },
      });
    };
  
  return (
    <div className="flex flex-col items-center text-center max-w-[250px] lg:max-w-[200px]">
      <img
        onClick={handleClick}
        className="rounded-full border-2 border-gray-300 h-[15vh] w-[15vh] md:h-[18vh] md:w-[18vh] object-cover cursor-pointer transition-transform hover:scale-105"
        src={props.Image}
        alt={props.Title}
      />
      <h1
        onClick={handleClick}
        className="text-sm md:text-base font-semibold mt-3 hover:text-[#999285] cursor-pointer leading-snug"
      >
        {props.Title}
      </h1>
    </div>
  )
}

export default Section2Component