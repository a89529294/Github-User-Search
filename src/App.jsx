import React, { useEffect, useState } from "react";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Searchbar from "./components/Searchbar.jsx";

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [searchTerm, setSearchTerm] = useState("octocat");
  const [userInfo, setUserInfo] = useState({});
  const [searchStatus, setSearchStatus] = useState("loading"); //loading, loaded, error, idle

  useEffect(() => {
    setSearchStatus("loading");
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((resp) => {
        if (resp.ok) return resp.json();
        else {
          throw new Error("No results");
        }
      })
      .then((data) => {
        setUserInfo({
          name: data.name,
          login: data.login,
          bio: data.bio,
          following: data.following,
          followers: data.followers,
          repos: data.public_repos,
          location: data.location,
          blog: data.blog,
          twitter: data.twitter_username,
          company: data.company,
          joined: data.created_at,
          avatar_url: data.avatar_url,
        });
        setSearchStatus("loaded");
      })
      .catch(() => {
        setSearchStatus("error");
      });
  }, [searchTerm]);

  return (
    <div className="min-h-screen px-6 py-8 font-mono bg-light-gray dark:bg-dark-black sm:px-24 sm:py-36 lg:px-80">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Searchbar
        setSearchTerm={setSearchTerm}
        searchStatus={searchStatus}
        setSearchStatus={setSearchStatus}
      />
      <Card userInfo={userInfo} />
    </div>
  );
}

export default App;
