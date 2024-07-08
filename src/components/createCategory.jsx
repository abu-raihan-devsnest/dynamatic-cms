import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import BodyBG from "./BodyBG";
import HeaderTitle from "./HeaderTitle";
import { Select, Image, Text } from "@chakra-ui/react";
import CategoriesTags from "./CategoriesTags";
import info from "../assets/icons/Info.svg";
import { useState } from "react";
const CreateCategory = () => {
  const [tags, setTags] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const handlecreateCategory = (e) => {
    e.preventDefault();
    const selectCategoryType = "select";
    console.log({ tags, categoryTitle });
  };

  return (
    <BodyBG>
      <HeaderTitle titleText="Create Category" />
      <Box minW={"700px"} maxW={"700px"} sm="100%">
        <Box></Box>

        {/* create category functionality */}
        <Box
          borderRadius={"12px "}
          padding={"16px"}
          boxShadow={
            "0px 1px 0px 0px #CCCCCC80 inset, 0px -1px 0px 0px #0000002B inset, -1px 0px 0px 0px #00000021 inset, 1px 0px 0px 0px #00000021 inset, 0px 1px 0px 0px  #1A1A1A12"
          }
          bg={"#FFFFFF"}
          fontFamily={'"Inter", sens-serif'}
        >
          <form action="">
            <Box mb={"12px"}>
              <FormLabel
                mb={"5px"}
                fontWeight={"600"}
                fontSize={"13px"}
                color={"#00070B"}
              >
                Select type
              </FormLabel>
              <Select
                cursor={"pointer"}
                _focusVisible={{
                  outline: "none",
                }}
                borderRadius={"8px"}
                border={"1px solid #EBEBEB"}
                _hover={{ border: "border 1px solid default" }}
                placeholder="Checkbox"
              >
                <option value="option1">Radio button</option>
                <option value="option1">None</option>
              </Select>
            </Box>

            <Box mb={"12px"}>
              <FormLabel
                mb={"5px"}
                fontWeight={"600"}
                fontSize={"13px"}
                color={"#00070B"}
              >
                Category title
              </FormLabel>
              <Input
                _focusVisible={{
                  outline: "none",
                }}
                placeholder="Write here"
                bg={"#F8F8F8"}
                border={"1px solid #EEEEEE"}
                name="categoryTitle"
                onChange={(e) => setCategoryTitle(e.target.value)}
              />
            </Box>

            <CategoriesTags tags={tags} setTags={setTags} />

            <Box display={"flex"} alignItems={"center"} gap={"5px"} mt={"5px"}>
              <Image src={info} />
              <Text>press enter to add categories</Text>
            </Box>

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"10px"}
              mt={"12px"}
            >
              <Button
                w={"full"}
                borderRadius={"8px"}
                padding={"8px 16px"}
                bg={"#EBEBEB"}
              >
                Reset
              </Button>
              <Button
                w={"full"}
                borderRadius={"8px"}
                padding={"8px 16px"}
                bg={"#D0EEFF"}
                color={"#00AEF9"}
                _hover={{ bg: "#c4e8fe" }}
                _focus={{ bg: "#b4e0fa" }}
                onClick={handlecreateCategory}
              >
                Save category
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </BodyBG>
  );
};

export default CreateCategory;
