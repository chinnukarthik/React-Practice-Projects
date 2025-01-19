import React, { useEffect, useState } from "react";
import User from "./userData";

function GitHubFinder() {
  const [userName, setUserName] = useState("chinnukarthik");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  async function gitHubSearchFetch() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  console.log(userData);
  function handleClick() {
    gitHubSearchFetch();
  }

  useEffect(() => {
    gitHubSearchFetch();
  }, []);
  if (loading) {
    return <h1>Loading! Please Wait.......</h1>;
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <input
          className="border-2 border-black"
          type="text"
          placeholder="Enter Username to search"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="border-2 border-blue-300 rounded"
        >
          Search
        </button>
        {userData !== null ? <User user={userData} /> : null}
      </div>
    </div>
  );
}

export default GitHubFinder;
