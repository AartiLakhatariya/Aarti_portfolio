import data from "../data/emergency-contact.json";
import "./CardStyles.css";

const EmergencyContact = () => (
  <div>
    <h2 style={{ paddingLeft: "20px" }}>Emergency Contact</h2>
    <div className="grid-wrapper">
      <div className="card-container">        
        <p>
          <strong>Name:</strong> {data.name}
        </p>
        <p>
          <strong>Relation:</strong> {data.relation}
        </p>
        <p>
          <strong>Phone:</strong> {data.phone}
        </p>
        <p>
          <strong>Address:</strong> {data.address.street}, {data.address.city},{" "}
          {data.address.state}, {data.address.zipcode}, {data.address.country}
        </p>
      </div>
    </div>
  </div>
);

export default EmergencyContact;
