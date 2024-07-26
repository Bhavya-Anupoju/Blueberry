import { CDN_URL } from "../utils/Constants";
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;

  return (
    <div
      data-testid="resCard"
      className="m-2 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <div className="">
        <img
          className="rounded-lg h-[200px] w-full"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold py-2 text-md">{truncateText(name, 20)}</h3>
      <h4>{truncateText(cuisines.join(","), 25)}</h4>
      <h4>⭐{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};
export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
