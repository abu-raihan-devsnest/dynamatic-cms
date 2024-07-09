import { Box } from "@chakra-ui/react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import CreateWidget from "./components/CreateWidget";
import CreateCategory from "./components/CreateCategory";
function App() {
  return (
    <>
      <Box>
        <CreateCategory />
        <CreateWidget></CreateWidget>
        <HeroSection></HeroSection>
      </Box>
    </>
  );
}

export default App;
