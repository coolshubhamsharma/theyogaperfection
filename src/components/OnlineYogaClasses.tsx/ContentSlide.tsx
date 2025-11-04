type Slid = {
  Title: string;
  Content: string;
  Page?: boolean;
  city?: string;
};

const ContentSlide = (props: Slid) => {
  const replacedTitle = props.Title.replace(
    /Noida/g,
    props.city ? props.city.charAt(0).toUpperCase() + props.city.slice(1) : ""
  );

  const replacedContent = props.Content.replace(
    /Noida/g,
    props.city ? props.city.charAt(0).toUpperCase() + props.city.slice(1) : ""
  );

  return (
    <div className="mt-8 w-full flex">
      <div className="w-[90vw] sm:w-[80vw] lg:w-[60vw]">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#A33D3D] mb-2 leading-snug cursor-pointer hover:text-[#8c2f2f] transition-colors duration-300">
          {props.Page ? replacedTitle : props.Title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed tracking-wide">
          {props.Page ? replacedContent : props.Content}
        </p>
        <hr className="mt-4 border-gray-300" />
      </div>
    </div>
  );
};

export default ContentSlide;
