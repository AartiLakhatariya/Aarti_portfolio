import data from "../data/social-profiles.json";
import "./CardStyles.css";

const SocialProfiles = () => (
  <div>
    <h2 style={{ paddingLeft: "20px" }}>Social Profiles</h2>
    <div className="grid-wrapper">
      <div className="card-container">
        <p>
          <a href={data.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
        <p>
          <a href={data.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
        <p>
          <a href={data.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </p>
        <p>
          <a href={data.twitter} target="_blank" rel="noreferrer">
            Twitter
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default SocialProfiles;
