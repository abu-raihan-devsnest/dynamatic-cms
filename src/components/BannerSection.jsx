import BodyBG from "./BodyBG";
import { Box } from "@chakra-ui/react";
import InputFile from "./InputFile";

const BannerSection = () => {
  return (
    <BodyBG>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box width={{ base: "100%", md: "700px" }}>
          <InputFile />
        </Box>
      </Box>
    </BodyBG>
  );
};

export default BannerSection;
