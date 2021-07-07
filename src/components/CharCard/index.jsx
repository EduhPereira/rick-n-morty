import "./styles.css";
export const CharCard = ({ name, image, gender, species, status }) => {
  if (name.length > 15) {
    name = name.substring(0, 16) + "...";
  }

  return status === "Alive" ? (
    <div className="CharCard">
      <img src={image} className="CharCard__Image" alt={name} />
      <div className="container">
        <div className="Status__Info">
          <span className="Status Alive"></span>
          <span className="Alive__Text">Alive</span>
        </div>
        <span className="CharCard__Info">{name}</span>
        <span className="CharCard__Info">{gender}</span>
        <span className="CharCard__Info">{species}</span>
      </div>
    </div>
  ) : (
    <div className="CharCard">
      <img src={image} className="CharCard__Image" alt={name} />
      <div className="container">
        <div className="Status__Info">
          <span className="Status Dead"></span>
          <span className="Dead__Text">Dead</span>
        </div>
        <span className="CharCard__Info CharCard__Info--Name ">{name}</span>
        <span className="CharCard__Info">{gender}</span>
        <span className="CharCard__Info">{species}</span>
      </div>
    </div>
  );
};
