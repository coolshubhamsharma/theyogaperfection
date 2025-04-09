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

const BlogCard = (props : prop) => {

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
        <div className="card bg-base-100 w-96 h-[70vh] mt-10 shadow-lg">
            <div className="px-5 mt-4">
                <img className="h-[35vh] w-full rounded-sm"
                src={props.Image}
                alt="Shoes"
                />
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{props.Title}</h2>
                <p>{props.CatchPhrase}</p>
                <div className="card-actions">
                    <button onClick={handleClick} className="btn btn-primary hover:bg-purple-700">Read More</button>
                </div>
            </div>
            {/* <h1 className="text-gray-400 text-sm text-right pr-2">22 March 2025</h1> */}
        </div>
    </div>
  )
}

export default BlogCard