import "./styles.css";
import { CharCard } from "../CharCard";
export const Characters = ({ charactersList }) => {
  return (
    <div className="CharacterList">
      {charactersList.map((character) => {
        return (
          <CharCard
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            gender={character.gender}
            species={character.species}
          />
        );
      })}
    </div>
  );
};
