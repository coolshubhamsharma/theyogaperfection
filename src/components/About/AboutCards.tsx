

const AboutCards = () => {
  return (
    <div className="flex m-20 justify-between mt-40">
       <div className="card w-96 bg-base-100 card-lg shadow-lg">
            <div className="card-body">
                <h2 className="text-lg card-title text-gray-700 hover:text-xl hover:text-purple-700 hover:cursor-pointer">Our Purpose:</h2>
                <p className="text-gray-600 mt-2">Our purpose is to cultivate a warm and inclusive environment where individuals can experience the transformative benefits of yoga. We are dedicated to offering a safe and supportive space that allows everyone to practice at their own pace while fostering connections within a like-minded community.</p>
            </div>
       </div>

       <div className="card w-96 bg-base-100 card-lg shadow-lg">
            <div className="card-body">
                <h2 className="text-lg card-title text-gray-700 hover:text-xl hover:text-purple-700 hover:cursor-pointer">Future Outlook:</h2>
                <p className="text-gray-600 mt-2">Our dream is to build a community of individuals dedicated to enhancing their lives through yoga. We aspire to create a world where everyone can access yoga’s transformative benefits, empowering them to live with compassion, resilience, and purpose. Our commitment lies in supporting our students in reaching their goals and fostering a more peaceful, connected, and joyful world.</p>
            </div>
       </div>

       <div className="card w-96 bg-base-100 card-lg shadow-lg">
            <div className="card-body">
                <h2 className="text-lg card-title text-gray-700 hover:text-xl hover:text-purple-700 hover:cursor-pointer">What We Stand For:</h2>
                <p className="text-gray-600 mt-2">Our service is built on authenticity, kindness, and growth. We see yoga as a powerful path to personal development and are dedicated to fostering a supportive, non-judgmental space for learning and self-discovery. We believe everyone has the potential to transform their lives through yoga, and we are here to guide and support them on their journey.</p>
            </div>
       </div>
    </div>
  )
}

export default AboutCards