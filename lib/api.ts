import { Character } from "../types.ts";

export async function fetchCharacters(): Promise<Character[]> {
  const res = await fetch("https://hp-api.onrender.com/api/characters");
  if (!res.ok) throw new Error("Failed to fetch characters");
  return await res.json();
}

export async function fetchCharacter(id: string): Promise<Character | null> {
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
  if (!res.ok) return null;
  const arr = await res.json();
  return (arr[0] as Character) ?? null;
}
