import { Handlers, PageProps } from "$fresh/server.ts";
import { fetchCharacter } from "../../lib/api.ts";
import { getFavoritesCookie } from "../../lib/cookies.ts";
import CharacterDetail from "../../components/CharacterDetail.tsx";
import { Character } from "../../types.ts";

interface Data {
  character: Character;
  favorites: string[];
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const { id } = ctx.params;
    const character = await fetchCharacter(id);
    if (!character) return ctx.renderNotFound();
    const favorites = getFavoritesCookie(req.headers.get("cookie"));
    return ctx.render({ character, favorites });
  },
};

export default function CharacterPage({ data }: PageProps<Data>) {
  const fav = data.favorites.includes(data.character.id);
  return <CharacterDetail character={data.character} favorite={fav} />;
}
