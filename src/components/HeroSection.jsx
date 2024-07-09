import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  HStack,
} from "@chakra-ui/react";
import BodyBG from "./BodyBG";
import HeaderTitle from "./HeaderTitle";
import { useState } from "react";

const HeroSection = () => {
  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubTitle, setHeroSubTitle] = useState("");
  const [ctaText, setCtaText] = useState("");

  return (
    <BodyBG>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box width={{ base: "100%", md: "700px" }}>
          <HeaderTitle titleText="Hero section" />
          <Box
            bgColor="#FFFFFF"
            mt="10px"
            borderRadius="12px"
            p="16px"
            boxShadow="base"
          >
            <FormControl>
              <FormLabel fontSize="13px" fontWeight="550" htmlFor="title">
                Title
              </FormLabel>
              <Input
                name="heroTitle"
                value={heroTitle}
                onChange={(e) => setHeroTitle(e.target.value)}
                id="title"
                bgColor="#F8F8F8"
                border="1px"
                borderColor="#EEEEEE"
                h="36px"
                py="12px"
                px="8px"
                type="text"
                variant="unstyled"
                placeholder="Write here"
              />
              <FormLabel
                mt="10px"
                fontSize="13px"
                fontWeight="550"
                htmlFor="subTitle"
              >
                Subtitle
              </FormLabel>
              <Textarea
                name="heroSubTitle"
                value={heroSubTitle}
                onChange={(e) => setHeroSubTitle(e.target.value)}
                id="subTitle"
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
              <FormLabel
                mt="10px"
                fontSize="13px"
                fontWeight="550"
                htmlFor="cta"
              >
                CTA text
              </FormLabel>
                          <Input
                              name="ctaText"
                              value={ctaText}
                              onChange={(e) => setCtaText(e.target.value)}
                id="cta"
                bgColor="#F8F8F8"
                border="1px"
                borderColor="#EEEEEE"
                h="36px"
                py="12px"
                px="8px"
                type="text"
                variant="unstyled"
                placeholder="Write here"
              />
              <HStack mt="10px" spacing="12px" justify="space-between">
                <Button
                  borderRadius="8px"
                  p="8px"
                  w="100%"
                  h="40px"
                  bgColor="#EBEBEB"
                  color="#374144"
                  fontSize="15px"
                  fontWeight="550"
                >
                  Reset
                </Button>
                <Button
                  _hover={{ bg: "#06a2e4" }}
                  _focus={{ bg: "#069ad9" }}
                  borderRadius="8px"
                  p="8px"
                  w="100%"
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
        </Box>
      </Box>
    </BodyBG>
  );
};
export default HeroSection;
