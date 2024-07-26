import { useSelector, useDispatch } from "react-redux";
import { clearCart, addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/Constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  let totalCost = 0;
  let data = [];
  cartItems.forEach((item) => {
    let index = data.findIndex((x) => x.id === item.id);
    if (index === -1) {
      data.push({
        ...item,
        count: 1,
      });
    } else {
      data[index].count += 1;
    }

    totalCost += item.price / 100 || item.defaultPrice / 100;
  });
  totalCost = totalCost.toFixed(2);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto p-4 md:px-8 lg:px-32 mt-10">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold sm:text-2xl sm:p-2">Cart</h1>
        {cartItems.length !== 0 && (
          <button
            className="bg-slate-300 px-2 py-1 font-semibold text-black rounded-md hover:bg-slate-600 hover:text-white transition-all sm:px-4 sm:py-2 sm:text-base"
            onClick={handleClear}
          >
            Clear Cart
          </button>
        )}
      </div>
      <div>
        {cartItems.length === 0 ? (
          <h1 className="text-lg font-semibold text-slate-400 sm:text-xl">
            Your cart is empty
          </h1>
        ) : (
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center border-b-2 border-indigo-200 last:border-0 py-4"
              >
                <div className="flex items-center">
                  <div className="w-1/3">
                    <img
                      src={CDN_URL + item?.imageId}
                      className="w-full h-full rounded-md mr-2 max-w-24 max-h-24"
                      alt="itemImage"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-lg font-semibold sm:text-xl">
                      {item.name}
                    </h1>
                    <h1 className="text-md text-slate-500 px-2">
                      ₹{item.price / 100 || item.defaultPrice / 100}
                    </h1>
                  </div>
                </div>
                {
                  <div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <button
                        className="bg-purple-500 px-4 py-2 text-white rounded-md rounded-tr-none rounded-br-none hover:bg-purple-600 transition-all"
                        onClick={() => handleRemove(item)}
                      >
                        -
                      </button>
                      <button className="bg-white font-bold py-2 px-4 text-xs hover:shadow-md transition-all sm:py-2">
                        {item.count}
                      </button>
                      <button
                        className="bg-purple-500 px-4 py-2 text-white rounded-md rounded-tl-none rounded-bl-none hover:bg-purple-600 transition-all"
                        onClick={() => handleAdd(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                }
              </div>
            );
          })
        )}
      </div>
      {cartItems.length === 0 ? null : (
        <div className="border-t-2 border-red-200 mt-4 pt-4 text-xl">
          <div className="flex justify-between border-indigo-500 p-2 bg-slate-100 rounded-md">
            Total Cost: <div className="text-black-500">₹{totalCost}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
