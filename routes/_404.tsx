import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="detail">
        <h1>404 - Page not found</h1>
        <a href="/">Volver</a>
      </div>
    </>
  );
}
