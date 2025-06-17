import { useSignal } from "@preact/signals";

interface Props {
  id: string;
  initial: boolean;
}

export default function StarButton({ id, initial }: Props) {
  const fav = useSignal(initial);

  const toggle = () => {
    fav.value = !fav.value;
    const cookie = Object.fromEntries(
      document.cookie.split("; ").map((c) => c.split("=")),
    );
    let list: string[] = [];
    if (cookie.favorites) {
      try {
        list = JSON.parse(decodeURIComponent(cookie.favorites));
      } catch {
        // ignore malformed cookie
      }
    }
    if (fav.value) {
      if (!list.includes(id)) list.push(id);
    } else {
      list = list.filter((x) => x !== id);
    }
    document.cookie = `favorites=${
      encodeURIComponent(JSON.stringify(list))
    }; Path=/`;
  };

  return (
    <span class={fav.value ? "star fav" : "star"} onClick={toggle}>
      ★
    </span>
  );
}
