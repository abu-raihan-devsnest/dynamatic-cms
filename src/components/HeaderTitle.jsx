import { Box, Img, Text } from "@chakra-ui/react";
import leftArrow from "../assets/icons/leftArrow.svg";
const HeaderTitle = ({ titleText }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={"10px"}
      fontFamily={'"Inter", sens-serif'}
      mb={"7px"}
      mt={"12px"}
    >
      <Img src={leftArrow} />
      <Text color={"#000000"} fontWeight={"600"} fontSize={"18px"}>
        {titleText}
      </Text>
    </Box>
  );
};

export default HeaderTitle;
