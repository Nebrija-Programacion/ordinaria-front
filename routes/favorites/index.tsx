import { Handlers, PageProps } from "$fresh/server.ts";
import { fetchCharacters } from "../../lib/api.ts";
import { getFavoritesCookie } from "../../lib/cookies.ts";
import CharacterGrid from "../../components/CharacterGrid.tsx";
import { Character } from "../../types.ts";

interface Data {
  characters: Character[];
  favorites: string[];
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const favorites = getFavoritesCookie(req.headers.get("cookie"));
    const all = await fetchCharacters();
    const characters = all.filter((c) => favorites.includes(c.id));
    return ctx.render({ characters, favorites });
  },
};

export default function FavPage({ data }: PageProps<Data>) {
  return (
    <CharacterGrid characters={data.characters} favorites={data.favorites} />
  );
}
