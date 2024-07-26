import React, { useState, useEffect } from "react";

const UserClass = ({ name }) => {
  const [userInfo, setUserInfo] = useState({
    name: "Dummy",
    location: "Default",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/akshaymarch7"
        );
        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  console.log(name + " Child Render");

  const { name: userName, location, avatar_url } = userInfo;
  return (
    <div className="user-card">
      <img src={avatar_url} alt="avatar" />
      <h2>Name: {userName}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @akshaymarch7</h4>
    </div>
  );
};

export default UserClass;
