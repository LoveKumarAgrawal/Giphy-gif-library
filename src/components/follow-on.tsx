import {FaGithub, FaLinkedin, FaXTwitter} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/love-kumar-agrawal-898337281/">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.github.com/LoveKumarAgrawal">
          <FaGithub size={20} />
        </a>
        <a href="https://x.com/LoveAgrawal9977">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;