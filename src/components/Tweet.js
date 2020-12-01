const Tweet = ({ tweet }) => {
  return (
    <div className="tweet-container">
      <div className="tweet">
        <div className="user">
          <div className="profile-pic-tweet"></div>
          <h3>User</h3>
          <h4>@user</h4>
          <p> • 10m</p>
        </div>
        <div className="tweet-content">
          <p>{tweet}</p>
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
