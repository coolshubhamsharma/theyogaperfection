import { GrYoga } from "react-icons/gr";
import { GiMeditation } from "react-icons/gi";
import { TbStretching } from "react-icons/tb";

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-between mb-[20vh]">
        <div className="card card-border bg-base-100 md:max-w-96 max-w-45 shadow-lg mt-2">
            <div className="card-body items-center">
                <GiMeditation className="size-[150px] text-purple-700 hover:text-black hover:cursor-pointer" />    
                <h2 className="card-title">Clear, Calm, Happy</h2>
                <p>Breathe, move, and find internal equanimity through this well-rounded practice. Begin seated with gentle spinal movements, then find some kneeling poses .</p>
            </div>
        </div>

        <div className="card card-border bg-base-100 md:max-w-96 max-w-45 shadow-lg mt-2">
            <div className="card-body items-center">
                <GrYoga className="size-[150px] text-purple-700 hover:text-black hover:cursor-pointer" />
                <h2 className="card-title">Yoga to Ease into Your Day</h2>
                <p>Wake up and feel ready to tackle your day with this feel good, stretchy yin class. Focus on opening your lower back, sides of your body, and hamstrings</p>
            </div>
        </div>

        <div className="card card-border bg-base-100 md:max-w-96 max-w-45 shadow-lg mt-2">
            <div className="card-body items-center">
                <TbStretching className="size-[150px] text-purple-700 hover:text-black hover:cursor-pointer" />
                <h2 className="card-title">Move with Tenderness</h2>
                <p>Move and breath with compassion for yourself, inside and out. Choose a mantra that is meaningful to you and move smoothly.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Cards