import { AppProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";

export default function LayoutWrapper({ Component }: AppProps) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}
