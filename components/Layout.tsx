import { JSX } from "preact";

export default function Layout(props: { children: JSX.Element }) {
  return (
    <>
      <header class="header">
        <nav>
          <a href="/">Todos</a>
          <a href="/favorites">Favoritos</a>
        </nav>
      </header>
      <main class="main">{props.children}</main>
      <footer class="footer">Nebrija 2025</footer>
    </>
  );
}
