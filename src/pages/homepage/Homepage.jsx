import { HomeCategories, HomeHeroSection } from "../../components";
import { useDocumentTitle } from "../../utils";
import "./homepage.css";

export const Homepage = () => {
  useDocumentTitle("Home");

  return (
    <main className="home-main">
      <HomeHeroSection />
      <HomeCategories />
    </main>
  );
};
