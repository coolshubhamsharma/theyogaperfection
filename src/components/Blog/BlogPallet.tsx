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


const BlogPallet = (props : prop) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/showblog", {
      state: {
        ...props
      },
    });
  };

  return (
    <div className="flex justify-between gap-3 p-2">
        <div className="w-[25vh]">
        <img onClick={handleClick} className="w-full h-[6vw] rounded-xl cursor-pointer" src={props.Image} alt="" />
        </div>
        <h1 onClick={handleClick} className="leading-5 text-md tracking-tight cursor-pointer">{props.Title}</h1>
    </div>
  )
}

export default BlogPallet