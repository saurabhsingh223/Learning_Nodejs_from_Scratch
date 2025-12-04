import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/saurabhsingh223")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-500 text-white text-3xl p-4">
      Github Followers: {data.followers}
      <br />
      <img src={data.avatar_url} alt="git_pic" className="w-40 rounded-full mx-auto mt-4" />
    </div>
  );
};

export default Github;
