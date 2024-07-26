import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/Constants";

const ItemList = ({ items }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="container mx-auto">
      <ul>
        {items?.map((item) => {
          const { id, name, price, defaultPrice, imageId, isVeg, description } =
            item?.card?.info;
          return (
            <div
              key={name}
              className="flex py-2 border-b-2 border-indigo-200 last:border-0 justify-between items-start" //done
            >
              <div className="flex flex-col w-2/3 text-left">
                <h1 className="text-md font-semibold mb-1">
                  {name} {isVeg === 1 ? "🟢" : "🔴"} -{" "}
                  <span className="font-semibold text-indigo-600">
                    ₹{price === undefined ? defaultPrice / 100 : price / 100}
                  </span>
                </h1>
                <li>
                  {item?.card?.info?.ratings?.aggregatedRating?.rating}⭐️
                </li>
                <li className="text-sm text-slate-500 text-left">
                  {description}
                </li>
              </div>
              <div className="flex flex-col items-center w-1/3">
                <img
                  src={CDN_URL + imageId}
                  className="w-full max-w-sm rounded-lg shadow-xl mx-4"
                  alt="FoodImage"
                />
                {cartItems?.filter((cartItem) => cartItem.id === id).length ===
                0 ? (
                  <button
                    className="bg-purple-500 font-bold text-xs sm:text-base px-2 py-1 mt-[-20px] text-white rounded-md hover:bg-purple-600 hover:shadow-md transition-all w-16 sm:w-24 md:w-28" //from w-[50%]
                    onClick={() => handleAddItem(item?.card?.info)}
                  >
                    ADD +
                  </button>
                ) : (
                  <div className="flex mt-[-20px] w-16 sm:w-24 md:w-28">
                    <button
                      className="bg-purple-500 font-bold text-xs sm:text-base py-1 px-2 text-white rounded-l-md hover:bg-purple-600 hover:shadow-md transition-all w-8" //from w-[25%]
                      onClick={() => handleRemoveItem(item?.card?.info)}
                    >
                      -
                    </button>
                    <button
                      className="bg-white font-bold text-xs sm:text-base py-1 px-2 hover:shadow-md transition-all w-8" //from w-25
                    >
                      {
                        cartItems?.filter((cartItem) => cartItem.id === id)
                          .length
                      }
                    </button>
                    <button
                      className="bg-purple-500 font-bold text-xs sm:text-base py-1 px-2 text-white rounded-r-md hover:bg-purple-600 hover:shadow-md transition-all w-8" //from w-25
                      onClick={() => handleAddItem(item?.card?.info)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
