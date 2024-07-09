import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Textarea,
  Button,
  HStack,
} from "@chakra-ui/react";
import BodyBG from "./BodyBG";
import HeaderTitle from "./HeaderTitle";

const HeroSection = () => {
  return (
    <BodyBG>
      <Grid justifyContent="center" py="20px">
        <HeaderTitle titleText="Hero section" />
        <Box
          bgColor="#FFFFFF"
          mt="10px"
          borderRadius="12px"
          p="16px"
          w="700px"
          boxShadow="base"
        >
          <FormControl>
            <FormLabel fontSize="13px"
                fontWeight="550" htmlFor="title">Title</FormLabel>
                      <Input
                          id="title"
              bgColor="#F8F8F8"
              border="1px"
              borderColor="#EEEEEE"
              w="668px"
              h="36px"
              py="12px"
              px="8px"
              type="text"
              variant="unstyled"
              placeholder="Write here"
            />
            <FormLabel mt="4px" fontSize="13px"
                fontWeight="550" htmlFor="subTitle">Subtitle</FormLabel>
                      <Textarea
                          id="subTitle"
              w="668px"
              h="80px"
              bgColor="#F8F8F8"
              border="1px"
              px="8px"
              py="12px"
              borderColor="#EEEEEE"
              type="text"
              variant="unstyled"
              placeholder="Write here"
              resize="none"
            />

            <FormLabel mt='4px' fontSize="13px"
                fontWeight="550" htmlFor="cta" >CTA text</FormLabel>
                      <Input
                          id="cta"
              bgColor="#F8F8F8"
              border="1px"
              borderColor="#EEEEEE"
              w="668px"
              h="36px"
              py="12px"
              px="8px"
              type="text"
              variant="unstyled"
              placeholder="Write here"
            />
            <HStack mt="8px" spacing="12px" justify="space-between">
              <Button
                borderRadius="8px"
                p="8px"
                w="328px"
                h="40px"
                bgColor="#EBEBEB"
                color="#374144"
                fontSize="15px"
                fontWeight="550"
              >
                Reset
              </Button>
              <Button
                borderRadius="8px"
                p="8px"
                w="328px"
                h="40px"
                bgColor="#00AEF9"
                color="#FFFFFF"
                fontSize="15px"
                fontWeight="550"
              >
                Save section
              </Button>
            </HStack>
          </FormControl>
        </Box>
      </Grid>
    </BodyBG>
  );
};

export default HeroSection;
