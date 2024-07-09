import { Box } from "@chakra-ui/react";

const BodyBG = ({ children }) => {
  return (
    <Box width={"100%"} bg={"#F8F8F8"} padding={{ base: "20px" }}>
      {children}
    </Box>
  );
};

export default BodyBG;
