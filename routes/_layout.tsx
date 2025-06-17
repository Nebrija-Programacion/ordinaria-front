import { AppProps } from "$fresh/server.ts";

export default function LayoutWrapper({ Component }: AppProps) {
  return (
    <>
    <header class="header">
        <nav>
          <a href="/">Todos</a>
          <a href="/favorites">Favoritos</a>
        </nav>
      </header>
      <Component />
    </>
  );
}
