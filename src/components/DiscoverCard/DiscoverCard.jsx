import AttributeCard from "../AttributeCard/AttributeCard";
import "./DiscoverCard.css";

const DiscoverCard = ({name, attributes, image, banAttribute, onClickName }) => {
  return (
    <div className="card">
      <button onClick={onClickName} className ="name-button"
              role="button"> {name}</button>
      <div className="attribute-list">
        {attributes.map((attribute, index) => (
          <AttributeCard key={index} attribute={attribute} isBanned={false} onSubmit={banAttribute} />
        ))}
      </div>
      <img className="catImage" src={image} />
    </div>
  );
};

export default DiscoverCard;