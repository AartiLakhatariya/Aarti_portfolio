import AcademicProjects from "./components/AcademicProjects";
import Address from "./components/Address";
import Certification from "./components/Certification";
import EmergencyContact from "./components/EmergencyContact";
import LanguageSkills from "./components/LanguageSkills";
import SocialProfiles from "./components/SocialProfiles";

function App() {
  return (
    <div className="card-container">
      <h1> Portfolio Viewer</h1>
      <AcademicProjects />
      <Address />
      <Certification />
      <EmergencyContact />
      <LanguageSkills />
      <SocialProfiles />
    </div>
  );
}

export default App;
