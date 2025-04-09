
type Slid = 
    {
    Title:string,
    Content:string,
    Page?:Boolean,
    city?:string
    }


const ContentSlide = (props : Slid) => {
  return (
    <div>
      {  props.Page ? (
        <div className='mt-10'>
        <div className='flex justify-start w-[70vw]'>
          <div className='flex flex-col w-[70vw] h-[20vh] justify-between'>
            <h1 className='text-xl font-bold mt-2 cursor-pointer text-[#A33D3D]'>{props.Title.replace(/Noida/g, props.city ? props.city.charAt(0).toUpperCase() + props.city.slice(1) : "")}</h1>
            <p className='text-lg mt-1 text-gray-900'>{props.Content.replace(/Noida/g, props.city ? props.city.charAt(0).toUpperCase() + props.city.slice(1) : "")}</p>
            <hr className='mt-2' />
          </div>
        </div>
    </div>
      ) : (
        <div className='mt-10'>
          <div className='flex justify-start w-[60vw]'>
            <div className='flex flex-col w-[50vw] h-[20vh] justify-between'>
              <h1 className='text-xl font-bold mt-2 cursor-pointer'>{props.Title}</h1>
              <p className='text-lg mt-1 text-gray-900'>{props.Content}</p>
              <hr className='mt-2' />
            </div>
          </div>
      </div>
      )}
    </div>
  )
}

export default ContentSlide

{/* <div className='mt-10'>
          <div className='flex justify-start w-[60vw]'>
            <div className='flex flex-col w-[50vw] h-[20vh] justify-between'>
              <h1 className='text-xl font-bold mt-2 cursor-pointer'>{props.Title}</h1>
              <p className='text-lg mt-1 text-gray-900'>{props.Content}</p>
              <hr className='mt-2' />
            </div>
          </div>
      </div> */}