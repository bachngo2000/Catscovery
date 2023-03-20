import AttributeCard from "../AttributeCard/AttributeCard";
import "./BanCard.css";

const BanCard = (props) => {
  return (
    <div className="ban-card">
      <h2>Ban List</h2>
      <h4>Select an attribute in your listing to ban it</h4>
      <div className="banned-section">
        {props.selectedAttribute.map((bannedAttribute, index) => (
          <div key={index}>
            <AttributeCard key={index} attribute={bannedAttribute} isBanned={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BanCard;