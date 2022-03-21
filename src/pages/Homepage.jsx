import "./pages-css/homepage.css";
import { HomeCategories, HomeHeroSection } from "../components";
import { useDocumentTitle } from "../utils";

export const Homepage = () => {
  useDocumentTitle("Home");

  return (
    <main className="home-main">
      <HomeHeroSection />
      <HomeCategories />
    </main>
  );
};
