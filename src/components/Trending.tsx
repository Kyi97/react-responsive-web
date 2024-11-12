
import TrendingCard from "./TrendingCard";

const trendingItems = [
  {
    image:
      "https://images.hdqwalls.com/download/beauty-of-the-netherlands-5k-et-1920x1080.jpg",
    title: "Dolore magna aliqua",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ea tempore.",
    timeAgo: "2 min ago",
  },
  {
    image:
      "https://images.hdqwalls.com/download/windmill-village-in-netherlands-xt-1920x1080.jpg",
    title: "Dolore magna aliqua",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ea tempore.",
    timeAgo: "2 min ago",
  },
  {
    image:
      "https://images.hdqwalls.com/download/peaceful-time-with-bestfriend-sq-1920x1080.jpg",
    title: "Dolore magna aliqua",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ea tempore.",
    timeAgo: "2 min ago",
  },
];

const Trending = () => {
  return (
    <section className="mx-auto w-full sm:w-10/12 lg:w-8/12 px-4">
      <h3 className="text-black text-lg font-semibold my-7">TRENDING</h3>
      <div className="flex flex-wrap gap-8 justify-center">
        {trendingItems.map((item, index) => (
          <TrendingCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            timeAgo={item.timeAgo}
          />
        ))}
      </div>
    </section>
  );
};

export default Trending;
