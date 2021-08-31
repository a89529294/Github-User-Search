import React from "react";
import LocationIcon from "./svg-components/LocationIcon.jsx";
import LinkIcon from "./svg-components/LinkIcon.jsx";
import TwitterIcon from "./svg-components/TwitterIcon.jsx";
import CompanyIcon from "./svg-components/CompanyIcon.jsx";

const MyLink = ({ Icon, text, url }) => (
  <div
    className={`flex ${!text && "opacity-50"}`}
    onClick={() => (text ? window.open(url) : () => {})}
    onKeyDown={() => (text ? window.open(url) : () => {})}
    role="link"
    tabIndex={0}
  >
    <div className="w-9">{Icon}</div>
    <p className="text-sm font-normal leading-5 text-dark-blue dark:text-white">
      {text ? text : "Not Available"}
    </p>
  </div>
);

function Card({ userInfo }) {
  const {
    login,
    bio,
    following,
    followers,
    repos,
    location,
    blog,
    twitter,
    company,
    joined,
    avatar_url,
    name,
  } = userInfo;

  return (
    <div className="flex px-6 pt-8 pb-12 mt-4 bg-white shadow-3xl rounded-2xl dark:bg-fainting-light sm:p-10 lg:mt-6 lg:p-12">
      <div className="hidden w-16 h-16 mr-5 overflow-hidden rounded-full sm:w-28 sm:h-28 lg:block lg:mr-9">
        <img src={avatar_url} alt="avatar" />
      </div>
      <div className="lg:flex-grow">
        <div className="flex ">
          <div className="w-16 h-16 mr-5 overflow-hidden rounded-full sm:w-28 sm:h-28 lg:hidden">
            <img src={avatar_url} alt="avatar" />
          </div>
          <div className="flex flex-col justify-center lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:w-full">
            <h1 className="text-base font-bold leading-6 text-light-black dark:text-white sm:text-2xl">
              {name ? name : login}
            </h1>
            <p className="text-sm font-normal leading-5 text-light-blue sm:text-base lg:row-start-2">
              @{login}
            </p>
            <p className="mt-1 text-sm font-normal leading-5 text-dark-gray dark:text-white sm:text-base lg:row-start-1 lg:col-start-2 lg:justify-self-end">
              {joined}
            </p>
          </div>
        </div>
        <p className="mt-8 text-sm font-normal leading-6 text-dark-blue dark:text-white sm:text-base lg:mt-5">
          {bio ? bio : "This profile has no bio"}
        </p>
        <div className="flex py-5 mt-6 text-center bg-light-gray rounded-xl justify-evenly dark:bg-dark-black sm:text-left">
          <div>
            <p className="mb-2 text-xs leading-4 text-dark-blue dark:text-white ">
              Repos
            </p>
            <p className="dark:text-white">{repos}</p>
          </div>
          <div>
            <p className="mb-2 text-xs leading-4 text-dark-blue dark:text-white">
              Followers
            </p>
            <p className="dark:text-white">{followers}</p>
          </div>
          <div>
            <p className="mb-2 text-xs leading-4 text-dark-blue dark:text-white">
              Following
            </p>
            <p className="dark:text-white">{following}</p>
          </div>
        </div>
        <div className="grid mt-6 gap-y-4 sm:grid-cols-2 sm:grid-rows-2">
          <div className={`flex ${!location && "opacity-50"}`}>
            <div className="w-9">
              <LocationIcon />
            </div>
            <p className="text-sm font-normal leading-5 text-dark-blue dark:text-white">
              {location ? location : "Not Available"}
            </p>
          </div>
          <MyLink Icon={<LinkIcon />} text={blog} alt="blog" url={blog} />
          <MyLink
            Icon={<TwitterIcon />}
            text={twitter}
            alt="twitter"
            url={`http://twitter.com/${twitter}`}
          />
          <MyLink
            Icon={<CompanyIcon />}
            text={company}
            alt="company"
            url={`https://github.com/${company?.substring(1)}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
