import clockIcon from "../assets/images/clock-icon.svg";

const TrendingCard = ({ image, title, description, timeAgo }) => {
  return (
    <div className="flex flex-col w-64 bg-white rounded-md overflow-hidden">
      <img src={image} alt="trend" />
      <div className="flex flex-col p-5 space-y-3">
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="text-xs font-medium text-gray-400">{description}</p>
        <div className="flex items-center">
          <img src={clockIcon} alt="clock" className="w-4 mr-1" />
          <span className="text-xs font-medium text-gray-400">{timeAgo}</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
