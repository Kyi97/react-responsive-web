
import clockIcon from "../assets/images/clock-icon.svg";

const Main = () => {
  return (
    <section className=" bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Main Image and Content */}
        <div className="w-full lg:w-4/6 relative flex items-center justify-center">
          <div className="flex flex-col absolute text-gray-100 p-4 lg:p-8 max-w-md lg:max-w-lg">
            <h3 className="font-semibold text-base md:text-lg border-b-2 pb-3 md:pb-5 mb-3 md:mb-5">
              WORLD NEWS
            </h3>
            <h3 className="font-semibold text-lg md:text-xl">
              Amazing place in America to visit.
            </h3>
            <p className="text-xs md:text-sm mt-2">
              For some reason - this country, this city, this neighborhood, this
              particular street - is the <br /> place you are living a majority
              of your life in.
            </p>
            <div className="bg-rose-400 rounded-md w-fit px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm mt-4 cursor-pointer">
              LEARN MORE
            </div>
          </div>
          <img
            src="https://images.hdqwalls.com/download/autumn-forests-of-the-nurali-hills-5k-bp-1920x1080.jpg"
            alt="main"
            className="w-full h-full object-cover"
          />
        </div>

        {/* More News Section */}
        <div className="w-full lg:w-2/6 flex flex-col space-y-6 lg:space-y-8 px-4 lg:px-8 py-6 lg:py-0 justify-center">
          <h3 className="text-lg font-semibold text-black border-b-2 pb-3 md:pb-8 mb-1">
            MORE NEWS
          </h3>

          {/* Travel News Item */}
          <div className="flex flex-col space-y-1">
            <h4 className="text-xs md:text-sm text-rose-400 font-semibold">
              TRAVEL
            </h4>
            <h4 className="text-sm font-semibold text-gray-800">
              Article title
            </h4>
            <p className="text-xs md:text-sm text-gray-400 truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              fuga laboriosam, placeat ullam minima deserunt tenetur hic fugit
              doloribus vero, corrupti odit quae culpa dolorum repellat veniam
              expedita sit tempora.
            </p>

            <div className="flex items-center">
              <img src={clockIcon} alt="clock" className="w-4 mr-2" />
              <span className="text-xs font-medium text-gray-400">
                3 min ago
              </span>
            </div>
          </div>

          {/* Technology News Item */}
          <div className="flex flex-col space-y-1">
            <h4 className="text-xs md:text-sm text-rose-400 font-semibold">
              TECHNOLOGY
            </h4>
            <h4 className="text-sm font-semibold text-gray-800">
              Article title
            </h4>
            <p className="text-xs md:text-sm text-gray-400 truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              fuga laboriosam, placeat ullam minima deserunt tenetur hic fugit
              doloribus vero, corrupti odit quae culpa dolorum repellat veniam
              expedita sit tempora.
            </p>

            <div className="flex items-center">
              <img src={clockIcon} alt="clock" className="w-4 mr-2" />
              <span className="text-xs font-medium text-gray-400">
                3 min ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
