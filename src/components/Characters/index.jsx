import "./styles.css";
import { CharCard } from "../CharCard";
export const Characters = ({ charactersList }) => {
  return (
    <div className="CharacterList">
      {charactersList.map((character) => {
        return (
          <CharCard
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
          />
        );
      })}
    </div>
  );
};
