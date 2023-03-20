import "./AttributeCard.css";

const AttributeCard = ({ attribute, isBanned }) => {
  return (
    <button className={isBanned ? "banned-attribute-card" : "attribute-card"}>
      {attribute}
    </button>
  );
};

export default AttributeCard;