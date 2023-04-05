import NavBar from "./NavBar";
import "../styles/globals.css";

export default function Layout({ children }) {
  return (
    <Layout>
      <NavBar />
      <div>{children}</div>
    </Layout>
  );
}
