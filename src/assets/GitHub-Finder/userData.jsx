import React from "react";

function User({ user }) {
  const { avatar_url, followers, following, login, url, name, public_repos } =
    user;
  return (
    <div>
      <div>
        <img
          src={avatar_url}
          alt="Profile Pic"
          className="w-[200px] h-[200px]"
        />
      </div>
      <div>
        <a href={`https://github.com/${login}`} className="">
          {name || login}
        </a>
      </div>
      <div>
        <p>Public Response</p>
        <p>{public_repos}</p>
      </div>
      <div>
        <p>Followers</p>
        <p>{followers}</p>
      </div>
      <div>
        <p>Following</p>
        <p>{following}</p>
      </div>
    </div>
  );
}

export default User;
