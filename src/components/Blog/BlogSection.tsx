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

const BlogSection = (props : prop ) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/showblog", {
      state: {
        ...props
      },
    });
  };

  return (
    <div>
         <div className='mb-20'>
          <div className='flex ml-[10vw] justify-between w-[60vw]'>
            <div className="w-[18vw]  mr-[2vw]">
            <img onClick={handleClick} className='h-[33vh] w-full cursor-pointer rounded-sm' src={props.Image} alt="" />
            </div>
            <div className='flex flex-col w-[50vw] h-[31vh] justify-between'>
              <h1 className='text-lg font-bold text-[#81B9B9] cursor-pointer hover:underline'>{props.Category}</h1>
              <h1 onClick={handleClick} className='text-xl font-bold mt-2 cursor-pointer hover:text-[#999285]'>{props.Title}</h1>
              <p className='text-lg mt-3 text-gray-900'>{props.CatchPhrase}</p>
              <div className='flex mt-2'>
                <h1 className='text-md mt-3 font-normal text-gray-900 cursor-text'><span className='text-sm text-[#81B9B9] font-bold text-center cursor-pointer hover:text-[#483D8B] mr-5'>{props.Author}</span>{props.Date}</h1> 
              </div>
              <hr className='mt-7' />
            </div>
          </div>
        </div>
    </div>
    // 
  )
}

export default BlogSection