import { Character } from "../types.ts";
import StarButton from "../islands/StarButton.tsx";

export default function CharacterDetail(
  { character, favorite }: { character: Character; favorite: boolean },
) {
  return (
    <div class="detail">
      <img src={character.image} alt={character.name} />
      <h2>
        {character.name} <StarButton id={character.id} initial={favorite} />
      </h2>
      <p>Casa: {character.house || "Desconocida"}</p>
      <p>{character.alive ? "Vivo" : "Muerto"}</p>
      <a href="/">Volver</a>
    </div>
  );
}
