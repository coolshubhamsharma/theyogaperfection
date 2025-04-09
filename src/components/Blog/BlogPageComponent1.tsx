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

const BlogPageComponent1 = (props : prop) => {

    const navigate = useNavigate();

const handleClick = () => {
  navigate("/showblog", {
    state: {
      ...props
    },
  });
};

  return (
    <div className='mb-5  '>
            <img onClick={handleClick} className='rounded-sm h-[30vh] w-[25vw] cursor-pointer' src={props.Image} alt="" />
            <h1 onClick={handleClick} className='text-xl font-bold text-center m-1 cursor-pointer hover:text-[#999285]'>{props.Title}</h1>
            <h1 className='text-sm text-[#81B9B9] font-bold text-center mt-1 cursor-pointer hover:text-[#483D8B]'>{props.Author}</h1>
    </div>
  )
}

export default BlogPageComponent1