import React, { useState, useEffect } from "react";
import firebase from "../firebase";

/*import firebase from "firebase";*/
//Component
import Tweet from "./Tweet";
//Icons
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiFileGifLine } from "react-icons/ri";
import { BiPoll, BiSmile } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
const Main = ({
  tweetList,
  setTweetList,
  leftStatus,
  setLeftStatus,
  rightStatus,
  setRightStatus,
  tweetInput,
  tweetButton,
  username,
}) => {
  //Chance
  const Chance = require("chance");
  const chance = new Chance();
  //Firebase
  const firestore = firebase.firestore();
  const docRef = firestore.collection("tweets");

  useEffect(() => {
    docRef.orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      const getTweetList = snapshot.docs.map((doc) => ({
        tweet: doc.tweet,
        username: doc.username,
        timestamp: doc.timestamp,
        ...doc.data(),
      }));
      setTweetList(getTweetList);
    });
  }, []);

  const [tweetError, setTweetError] = useState(false);

  const tweetHandler = () => {
    if (tweetInput.current.value === "") {
      setTweetError(true);
    } else {
      setTweetError(false);
      setTweetList([
        {
          tweet: tweetInput.current.value,
          username: username,
          commentNumber: Math.floor(Math.random() * 500),
          retweetNumber: Math.floor(Math.random() * 1000),
          likeNumber: chance.floating({ min: 1, max: 50, fixed: 1 }),
          key: Math.random() * 1000,
        },
        ...tweetList,
      ]);

      docRef.add({
        tweet: tweetInput.current.value,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      tweetInput.current.value = "";
    }
  };

  return (
    <div className={`${leftStatus || rightStatus ? "main-disabled" : "main"}`}>
      <div className="header-nav">
        <div onClick={() => setLeftStatus(!leftStatus)} className="nav-divs">
          <div className="nav-div"></div>
          <div className="nav-div"></div>
          <div className="nav-div"></div>
        </div>
        <h1>Home</h1>
        <div
          onClick={() => setRightStatus(!rightStatus)}
          className="open-search"
        >
          Explore &gt;
        </div>
      </div>
      <div className="whats-happening">
        <div className="whats-happening-top">
          <div className="userinput">
            <div className="profile-pic-main"></div>
            <input
              placeholder="What's happening?"
              className="happening-textarea"
              type="textarea"
              ref={tweetInput}
            ></input>
          </div>

          <div className="tweet-error">
            <p className={tweetError ? "tweet-error-message" : ""}>
              {tweetError ? "*Please type a tweet*" : ""}
            </p>
          </div>
        </div>
        <div className="whats-happening-bottom">
          <div className="happening-icons">
            <HiOutlinePhotograph className="happening-icon" />
            <RiFileGifLine className="happening-icon" />
            <BiPoll className="happening-icon" />
            <BiSmile className="happening-icon" />
            <AiOutlineCalendar className="happening-icon" />
          </div>
          <button ref={tweetButton} onClick={tweetHandler}>
            Tweet
          </button>
        </div>
      </div>
      <div className="gap"></div>
      {tweetList.map((tweet) => (
        <Tweet
          username={tweet.username}
          color={{ backgroundColor: "rgb(35, 115, 128)" }}
          commentNumber={tweet.commentNumber}
          retweetNumber={tweet.retweetNumber}
          likeNumber={tweet.likeNumber}
          tweet={tweet.tweet}
          key={tweet.key}
        />
      ))}

      <Tweet
        randomTweet={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam ipsa sit ratione voluptas magni eius quod hic modi nam."
        }
      />
      <Tweet
        randomTweet={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam ipsa sit ratione voluptas magni eius quod hic modi nam."
        }
      />
      <Tweet
        randomTweet={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam ipsa sit ratione voluptas magni eius quod hic modi nam."
        }
      />
    </div>
  );
};

export default Main;
