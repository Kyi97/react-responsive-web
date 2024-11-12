
import clockIcon from "../assets/images/clock-icon.svg";

const HappeningNow = () => {
  return (
    <section className="mx-auto w-full sm:w-10/12 lg:w-8/12 px-4">
      <h3 className="text-black text-lg font-semibold my-7">HAPPENING NOW</h3>

      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Left Column */}
        <div className="flex flex-col w-full lg:w-2/3 space-y-6">
          <div className="h-48 lg:h-[47%] bg-red-100 rounded-md overflow-hidden">
            <img
              src="https://images.hdqwalls.com/download/windmill-in-farmland-sunset-view-5k-gu-1920x1080.jpg"
              alt="article"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-48 lg:h-[47%] bg-red-100 rounded-md overflow-hidden">
            <img
              src="https://images.hdqwalls.com/download/windmill-building-sunrise-beach-coast-8k-va-1920x1080.jpg"
              alt="article"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full lg:w-1/3 space-y-6">
          {[
            {
              imgSrc:
                "https://images.hdqwalls.com/download/aurora-startrails-5k-fs-1920x1080.jpg",
              title: "Small title",
              timeAgo: "3h ago by Worldnews",
            },
            {
              imgSrc:
                "https://images.hdqwalls.com/download/wind-farm-clouds-5k-ui-1920x1080.jpg",
              title: "Small title",
              timeAgo: "3h ago by Worldnews",
            },
            {
              imgSrc:
                "https://images.hdqwalls.com/download/windmill-water-reflection-lake-sky-2y-1920x1080.jpg",
              title: "Small title",
              timeAgo: "3h ago by Worldnews",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <img
                src={item.imgSrc}
                alt="article"
                className="w-full h-40 object-cover rounded-md overflow-hidden"
              />
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <div className="flex items-center">
                <img src={clockIcon} alt="clock" className="w-4 mr-1" />
                <span className="text-xs font-medium text-gray-400">
                  {item.timeAgo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappeningNow;
