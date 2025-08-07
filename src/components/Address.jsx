import data from "../data/address.json";
import "./CardStyles.css";

const Address = () => {
  const current = data.address[0].CurrentAddress;
  return (
    <div>
      <h2 style={{ paddingLeft: "20px" }}>Current Address</h2>
      <div className="grid-wrapper">
        <div className="card-container">
          <p>
            <strong>Street:</strong> {current.street}
          </p>
          <p>
            <strong>Taluka:</strong> {current.taluka}
          </p>
          <p>
            <strong>City:</strong> {current.city}
          </p>
          <p>
            <strong>State:</strong> {current.state}
          </p>
          <p>
            <strong>Zip:</strong> {current.zip}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
