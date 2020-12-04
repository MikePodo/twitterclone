import React, { useState } from "react";
//Icons
import { RiChat3Line, RiUpload2Line } from "react-icons/ri";
import { FaRetweet, FaRegHeart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const Tweet = ({
  tweet,
  color,
  commentNumber,
  retweetNumber,
  likeNumber,
  username,
  tweetList,
  setTweetList,
  isLiked,
  setIsLiked,
  likeHandler,
}) => {
  let like;
  isLiked
    ? (like = (
        <AiFillHeart onClick={likeHandler} className="tweet-icon filled" />
      ))
    : (like = <FaRegHeart onClick={likeHandler} className="tweet-icon" />);

  return (
    <div className="tweet-container">
      <div className="tweet">
        <div className="user">
          <div style={color} className="profile-pic-tweet"></div>
          <h3>{username ? username : "User"}</h3>
          <h4>@{username ? username.toLowerCase() : "user"}</h4>
          <p>•</p>
          <p>10m</p>
        </div>
        <div className="tweet-content">
          <p>{tweet}</p>
          <br />
          <div className="tweet-image" style={color}></div>
        </div>
        <br />
        <div className="tweet-bottom">
          <p>
            <RiChat3Line className="tweet-icon" />
            {commentNumber}
          </p>
          <p>
            <FaRetweet className="tweet-icon" />
            {retweetNumber}
          </p>
          <p>
            {like}
            {likeNumber}
          </p>
          <p>
            {" "}
            <RiUpload2Line className="tweet-icon" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
