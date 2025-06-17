import { Character } from "../types.ts";
import CharacterCard from "./CharacterCard.tsx";

export default function CharacterGrid(
  { characters, favorites }: { characters: Character[]; favorites: string[] },
) {
  return (
    <div class="grid">
      {characters.map((c) => (
        <CharacterCard
          character={c}
          favorite={favorites.includes(c.id)}
        />
      ))}
    </div>
  );
}
