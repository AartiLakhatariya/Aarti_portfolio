import data from "../data/language-skill.json";
import "./CardStyles.css";

const LanguageSkills = () => (
  <div>
    <h2 style={{ paddingLeft: "20px" }}>Language Skills</h2>
    <div className="grid-wrapper">
      {data["language-skills"].map((lang, index) => (
        <div className="card-container" key={index}>
          <h3>{lang.language}</h3>
          <p>
            <strong>Listening:</strong> {lang.listening}
          </p>
          <p>
            <strong>Spoken:</strong> {lang.spoken}
          </p>
          <p>
            <strong>Written:</strong> {lang.written}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default LanguageSkills;
