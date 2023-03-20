import AttributeCard from "../AttributeCard/AttributeCard";
import "./DiscoverCard.css";

const DiscoverCard = ({ name, attributes, image }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="attribute-list">
        {attributes.map((attribute, index) => (
          <AttributeCard key={index} attribute={attribute} isBanned={false} />
        ))}
      </div>
      <img className="catImage" src={image} />
    </div>
  );
};

export default DiscoverCard;