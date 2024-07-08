import { Box } from "@chakra-ui/react";
import "./App.css";
import CreateCategory from "./components/CreateCategory";
function App() {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CreateCategory />
      </Box>
    </>
  );
}

export default App;
