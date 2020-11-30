import React from "react";

const Right = () => {
  return (
    <div className="right-container">
      <div className="right">
        <input
          placeholder="Search Twitter"
          className="right-textarea"
          type="textarea"
        ></input>
        <div className="whats-happening-right">
          <div className="whats-happening-header">
            <h2>What's Happening</h2>
          </div>
          <div className="happening-right">
            <div className="happening-right-content">
              <h3>User • This morning</h3>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            </div>
            <div className="happening-right-img"></div>
          </div>
          <div className="happening-right">
            <div className="happening-right-content">
              <h3>User • This morning</h3>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            </div>
            <div className="happening-right-img"></div>
          </div>
          <div className="happening-right">
            <div className="happening-right-content">
              <h3>User • This morning</h3>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            </div>
            <div className="happening-right-img"></div>
          </div>
          <div className="happening-right">
            <div className="happening-right-content">
              <h3>User • This morning</h3>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            </div>
            <div className="happening-right-img"></div>
          </div>
          <div className="showmore">
            <h3>Show More</h3>
          </div>
        </div>
        <div className="follow">
          <div className="follow-header">
            <h2>Who to follow</h2>
          </div>
          <div className="followperson">
            <div className="followpic-div">
              <div className="followpic"></div>
            </div>
            <div className="followuser">
              <h3>User</h3>
              <h4>@user</h4>
            </div>
            <div className="follow-btn">
              <button>Follow</button>
            </div>
          </div>
          <div className="followperson">
            <div className="followpic-div">
              <div className="followpic"></div>
            </div>
            <div className="followuser">
              <h3>User</h3>
              <h4>@user</h4>
            </div>
            <div className="follow-btn">
              <button>Follow</button>
            </div>
          </div>
          <div className="showmore">
            <h3>Show More</h3>
          </div>
        </div>
        <div className="extras">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Ads info</p>
          <p>More...</p>
          <p>&copy; 2020 Twitter, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Right;
