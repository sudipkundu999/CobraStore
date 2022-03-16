import "./pages-css/homepage.css";
import { HomeCategories, HomeHeroSection } from "../components";

export const Homepage = () => {
  return (
    <main className="home-main">
      <HomeHeroSection />
      <HomeCategories />
    </main>
  );
};
