import { Box } from "@chakra-ui/react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import CreateWidget from "./components/CreateWidget";
import CreateCategory from "./components/CreateCategory";
import BannerSection from "./components/BannerSection";
function App() {
  return (
    <>
      <Box>
        <CreateCategory />
        <CreateWidget />
        <HeroSection />
        <BannerSection />
      </Box>
    </>
  );
}

export default App;
