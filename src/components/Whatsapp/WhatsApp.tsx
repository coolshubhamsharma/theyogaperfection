import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const WhatsApp = () => {
  return (
    <div className="fixed z-10 flex right-10 bottom-10">
       <Link to="https://wa.me/917419068920?text=Hello%2C%20I%20want%20a%20yoga%20class!
"><FaWhatsappSquare className="rounded-sm size-[5vw] text-green-500" /></Link>
    </div>
  )
}

export default WhatsApp