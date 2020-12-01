const Tweet = () => {
  return (
    <div className="tweet-container">
      <div className="tweet">
        <div className="user">
          <div className="profile-pic-tweet"></div>
          <h3>User </h3>
          <h4>@user</h4>
          <p> • 10m</p>
        </div>
        <div className="tweet-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus eaque beatae voluptate magnam rerum maxime! Odit ea
            maxime mollitia eveniet! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Minima, quis.
          </p>
          <br />
          <div className="tweet-image"></div>
        </div>
        <br />
        <div className="tweet-bottom">
          <p>80</p>
          <p>168</p>
          <p>1.6k</p>
          <p>Upload</p>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
