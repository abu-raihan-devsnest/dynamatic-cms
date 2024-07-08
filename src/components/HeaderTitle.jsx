import { Box, Img, Text } from "@chakra-ui/react";
import leftArrow from "../assets/icons/leftArrow.png";
const HeaderTitle = ({ titleText }) => {
  return (
    <Box>
      <Box>
        <Img src={leftArrow} />
        <Text>{titleText}</Text>
      </Box>
    </Box>
  );
};

export default HeaderTitle;
