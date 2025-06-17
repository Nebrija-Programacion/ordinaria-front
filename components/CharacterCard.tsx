import { Character } from "../types.ts";
import StarButton from "../islands/StarButton.tsx";

export default function CharacterCard(
  { character, favorite }: { character: Character; favorite: boolean },
) {
  return (
    <div class="card">
      <a href={`/characters/${character.id}`}>
        <img src={character.image!==""?character.image:"/no-image.jpg"} alt={character.name} />
      </a>
      <div class="card-info">
        <a class="name" href={`/characters/${character.id}`}>
          {character.name}
        </a>
        <StarButton id={character.id} initial={favorite} />
      </div>
    </div>
  );
}
