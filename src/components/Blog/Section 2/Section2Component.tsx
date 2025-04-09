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
    <div className='flex flex-col w-[18vw] mt-10'>
          <img onClick={handleClick} className='rounded-full border h-[15vh] w-[15vh] text-center mr-[5vw] ml-[5vw] cursor-pointer' src={props.Image} alt="" />
          <h1 onClick={handleClick} className='text-sm font-bold text-center hover:text-[#999285] cursor-pointer'>{props.Title}</h1>
        </div>
  )
}

export default Section2Component