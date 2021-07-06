import "./styles.css";
export const CharCard = ({ name, image, species, status }) => {
  name.length > 15 ? (name = name.substring(0, 16) + " ...") : (name = name);

  return status === "Alive" ? (
    <div className="CharCard Alive">
      <img src={image} className="CharCard__Image" alt={name} />
      <span className="CharCard__Info">{name}</span>
      <span className="CharCard__Info">{species}</span>
    </div>
  ) : (
    <div className="CharCard Dead">
      <img src={image} className="CharCard__Image" alt={name} />
      <span className="CharCard__Info">{name}</span>
      <span className="CharCard__Info">{species}</span>
    </div>
  );
};
