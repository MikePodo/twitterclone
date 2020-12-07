import React, { useState } from "react";
import firebase from "../firebase";
import ReactTimeAgo from "react-time-ago";
import { v4 as uuidv4 } from "uuid";
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
  id,
  timestamp,
  tweetList,
  setTweetList,
  initialUsername,
  initialColor,
  retweeted,
  retweetInitialUsername,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setIsLiked(!isLiked);
    const firestore = firebase.firestore();
    const docRef = firestore.collection("tweets").doc(id);
    if (!isLiked) {
      docRef.update({
        likeNumber: likeNumber + 1,
      });
    } else {
      docRef.update({
        likeNumber: likeNumber - 1,
      });
    }
  };

  let like;
  isLiked
    ? (like = (
        <AiFillHeart onClick={likeHandler} className="tweet-icon filled" />
      ))
    : (like = <FaRegHeart onClick={likeHandler} className="tweet-icon" />);

  const retweet = (id) => {
    const firestore = firebase.firestore();
    const docRef = firestore.collection("tweets").doc(id.clickedId);

    docRef.get().then((doc) => {
      retweetMessage(doc.data().tweet);
    });

    const retweetMessage = (message) => {
      firestore.collection("tweets").doc(id.id).set({
        tweet: message,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        commentNumber: 0,
        retweetNumber: 0,
        likeNumber: 0,
        id: id.id,
        key: id.id,
        color: initialColor,
        retweeted: true,
        initialUsername: initialUsername,
      });
    };

    docRef.update({
      retweetNumber: retweetNumber + 1,
    });
  };

  return (
    <div className="tweet-container">
      <div className="tweet">
        <div className="user">
          <div className="retweet-user">
            {retweeted ? (
              <h3>
                <FaRetweet className="tweet-icon" />
                {retweetInitialUsername} Retweeted
              </h3>
            ) : null}
          </div>
          <div className="original-tweet-user">
            <div style={color} className="profile-pic-tweet"></div>
            <h3>{username}</h3>
            <h4>@{username.toLowerCase()}</h4>
            <p>•</p>
            <p>
              {timestamp ? (
                <ReactTimeAgo
                  date={timestamp.toDate()}
                  locale="en-US"
                  timeStyle="twitter"
                />
              ) : null}
            </p>
          </div>
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
            <FaRetweet
              onClick={() => retweet({ id: uuidv4(), clickedId: id })}
              className="tweet-icon"
            />
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
