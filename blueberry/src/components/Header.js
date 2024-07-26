import { LOGO_URL } from "../utils/Constants";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-purple-300 p-4">
      <div className="logo-container flex items-center">
        <img
          className="w-20 sm:w-20 rounded-md md:w-24"
          src={LOGO_URL}
          alt="logo"
        />
        <h4 className="hidden lg:block px-2 font-semibold text-purple-800">
          Blueberry
        </h4>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 text-base sm:text-sm md:text-lg">
          <li>
            <span className="block sm:inline">
              Online Status: {onlineStatus ? "✅" : "🔴"}
            </span>
          </li>
          <li>
            <button onClick={handleHomeClick}>Home</button>
          </li>
          <li>
            <Link to="/about" className="block lg:inline">
              <span className="lg:hidden">About</span>
              <span className="hidden lg:inline">About Us</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block lg:inline">
              <span className="lg:hidden">Contact</span>
              <span className="hidden lg:inline">Contact Us</span>
            </Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="text-xl">
            <Link to="/cart">🛒 - {cartItems.length}</Link>
          </li>
        </ul>
        <div className="flex items-center ml-4">
          <button
            className="login bg-purple-500 px-4 py-2 rounded-md hover:bg-purple-600"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          {btnNameReact === "Logout" && (
            <li className="px-2 sm:px-4 py-1 sm:py-0">{loggedInUser}</li>
          )}
        </div>
      </div>
    </div>
  );

  // return (
  //   // <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-purple-300">
  //   //   <div className="logo-container flex items-center p-2">
  //   //     <img className="w-24 rounded-md" src={LOGO_URL} alt="logo" />
  //   //     <h4 className="px-2 font-semibold text-purple-800">Blueberry</h4>
  //   //   </div>
  //   //   <div className="flex items-center">
  //   //     <ul className="flex p-4 m-4">
  //   //       <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
  //   //       <li className="px-4">
  //   //         {/* <Link to="/">Home</Link> */}
  //   //         <button onClick={handleHomeClick}>Home</button>
  //   //       </li>
  //   //       <li className="px-4">
  //   //         <Link to="/about">About Us</Link>
  //   //       </li>
  //   //       <li className="px-4">
  //   //         <Link to="/contact">Contact Us</Link>
  //   //       </li>
  //   //       <li className="px-4">
  //   //         <Link to="/grocery">Grocery</Link>
  //   //       </li>
  //   //       <li className="px-4 text-xl">
  //   //         <Link to="/cart">🛒 - {cartItems.length}</Link>
  //   //       </li>
  //   //       <button
  //   //         className="login bg-purple-400 px-4 rounded-md"
  //   //         onClick={() => {
  //   //           btnNameReact === "Login"
  //   //             ? setBtnNameReact("Logout")
  //   //             : setBtnNameReact("Login");
  //   //         }}
  //   //       >
  //   //         {btnNameReact}
  //   //       </button>
  //   //       {btnNameReact === "Logout" && (
  //   //         <li className="px-4 ">{loggedInUser}</li>
  //   //       )}
  //   //     </ul>
  //   //   </div>
  //   // </div>
  // );
};

export default Header;
