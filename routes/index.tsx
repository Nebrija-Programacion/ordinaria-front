import { Handlers, PageProps } from "$fresh/server.ts";
import { fetchCharacters } from "../lib/api.ts";
import { getFavoritesCookie } from "../lib/cookies.ts";
import CharacterGrid from "../components/CharacterGrid.tsx";
import { Character } from "../types.ts";

interface Data {
  characters: Character[];
  favorites: string[];
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const characters = await fetchCharacters();
    const favorites = getFavoritesCookie(req.headers.get("cookie"));
    return ctx.render({ characters, favorites });
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    <CharacterGrid characters={data.characters} favorites={data.favorites} />
  );
}
