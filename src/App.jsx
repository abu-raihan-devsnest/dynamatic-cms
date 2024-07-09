import { Box } from "@chakra-ui/react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import CreateWidget from "./components/CreateWidget";
function App() {
  return (
    <>
      <Box>
        <CreateWidget></CreateWidget>
        <HeroSection></HeroSection>
      </Box>
    </>
  );
}

export default App;
