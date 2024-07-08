import { Box } from "@chakra-ui/react";

const BodyBG = ({ children }) => {
  return (
    <Box bg={"#F8F8F8"}>
      <Box>{children}</Box>
    </Box>
  );
};

export default BodyBG;
