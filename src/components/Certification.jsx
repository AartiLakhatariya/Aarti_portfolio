import data from "../data/certification.json";
import "./CardStyles.css";

const Certification = () => (
  <div>
    <h2 style={{ paddingLeft: "20px" }}>Certifications</h2>
    <div className="grid-wrapper">
      {data.certification.map((cert, index) => (
        <div className="card-container" key={index}>
          <h3>{cert.course_name}</h3>
          <p>
            <strong>Platform:</strong> {cert.platform}
          </p>
          <p>
            <strong>Date:</strong> {cert.date}
          </p>
          <a href={cert.credential_url} target="_blank" rel="noreferrer">
            View Credential
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Certification;
