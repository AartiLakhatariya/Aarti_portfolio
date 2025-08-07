import data from "../data/academic_projects.json";
import "./CardStyles.css";

const AcademicProjects = () => (
  <div className="card">
    <h2 style={{ paddingLeft: "20px" }}>Academic Projects</h2>
    <div className="grid-wrapper">
      {data.academic_projects.map((project, index) => (
        <div className="card-container" key={index}>
          <h3>{project.title}</h3>
          <p>
            <strong>Tech Stack:</strong> {project.tech_stack.join(", ")}
          </p>
          <p>{project.description}</p>
          <p>
            <em>{project.outcome}</em>
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default AcademicProjects;
