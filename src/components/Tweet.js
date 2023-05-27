import ProfileImage from "../components/ProfileImage.js";
import User from "../components/User.js";
import Timestamp from "../components/Timestamp.js";
import Message from "../components/Message.js";
import Actions from "../components/Actions.js";

function Tweet(props) {
  const { timestamp, message } = props.tweet;
  const { name, image, handle } = props.tweet.user;

  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <User userData={props.tweet.user} />
            <Timestamp time={props.tweet.timestamp} />
          </span>
        </div>

        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
