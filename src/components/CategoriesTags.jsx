import {
  Box,
  Input,
  Tag,
  TagLabel,
  TagCloseButton,
  FormLabel,
  Wrap,
  //   Text,
} from "@chakra-ui/react";
import { useState } from "react";

const CategoriesTags = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Box>
      <FormLabel
        mb={"5px"}
        fontWeight={"600"}
        fontSize={"13px"}
        color={"#00070B"}
      >
        Categories
      </FormLabel>
      <Box
        border={"1px solid #EEEEEE"}
        _focusVisible={{
          outline: "none",
        }}
        bg={"#F8F8F8"}
        padding={"8px"}
        borderRadius={"8px"}
      >
        <Wrap>
          {tags.map((tag, index) => (
            <Tag
              key={index}
              borderRadius="5px"
              padding={"4px 10px"}
              border={"1px solid #EBEBEB"}
              bg={"#FFFFFF"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"3px"}
            >
              <TagLabel
                fontSize={"12px"}
                fontWeight={"400"}
                lineHeight={"18px"}
                color={"#374144"}
              >
                {tag}
              </TagLabel>
              <TagCloseButton
                height={"14px"}
                width={"14px"}
                borderRadius={"2px"}
                bg={"#F8F8F8"}
                padding={"5px"}
                onClick={() => removeTag(index)}
              />
            </Tag>
          ))}
        </Wrap>
        <Input
          mt="2"
          py={"2"}
          placeholder="Type and press enter to add categories"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          variant="unstyled"
        />
      </Box>
    </Box>
  );
};

export default CategoriesTags;
