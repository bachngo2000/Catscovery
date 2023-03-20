import AttributeCard from "../AttributeCard/AttributeCard";
import "./BanCard.css";

const BanCard = ({ bannedAttributes }) => {
  return (
    <div className="ban-card">
      <h2>Ban List</h2>
      <h4>Select an attribute in your listing to ban it</h4>
      <div className="banned-section">
        {bannedAttributes.map((bannedAttribute, index) => (
          <AttributeCard key={index} attribute={bannedAttribute} isBanned={true} />
        ))}
      </div>
    </div>
  );
};

export default BanCard;