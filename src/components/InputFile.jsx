import { Box, Button, IconButton, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Image } from "@chakra-ui/react";
import uploadIcon from "../assets/icons/Icons.svg";
import { CloseIcon } from "@chakra-ui/icons";

const InputFile = ({ uploadingText }) => {
  const [images, setImages] = useState([]);
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push(reader.result);
        if (newImages.length === files.length) {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <>
      <Box>
        <Box
          my="8px"
          border="1px dashed"
          borderColor="#00B2FF"
          borderRadius="16px"
          height="118px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          position="relative"
          cursor="pointer"
          bgColor="#ECF8FF"
          p="16px"
        >
          <Input
            type="file"
            id="file-upload"
            display="none"
            accept="image/*"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file-upload"
            style={{ width: "100%", height: "100%" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
              cursor="pointer"
            >
              <Image src={uploadIcon} boxSize={8} mb={2} color="#00aaff" />
              <Text fontSize="13px" fontWeight="550" mb={1}>
                {uploadingText}
              </Text>
              <Text color="#374144" fontSize="12px" fontWeight="400">
                Asset Less than 1 MB. Width 300px, height 250px
              </Text>
            </Box>
          </label>
        </Box>

        <Box mt={4} display="flex" flexWrap="wrap" gap={4}>
          {console.log("bottom map", images)}
          {images?.map((image, index) => (
            <Box key={index} position="relative" display="inline-block">
              <CloseIcon
                height={"20px"}
                width={"20px"}
                padding={"4px"}
                borderRadius={"full"}
                bg={"white"}
                shadow={"lg"}
                border={"1px solid #e5e5e5"}
                position="absolute"
                top={"-5px"}
                right={"-5px"}
                onClick={() => handleRemoveImage(index)}
                cursor={"pointer"}
                _hover={{ bg: "#e5e5e5" }}
              />
              <Image
                src={image}
                height={"100px"}
                width={"100px"}
                borderRadius={"8px"}
                alt={`Uploaded ${index}`}
                border={"1px solid #e5e5e5"}
              />
            </Box>
          ))}
        </Box>
        {images.length > 1 && (
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Button
              bg={"red.500"}
              color={"white"}
              _hover={{ bg: "red.600" }}
              _focus={{ bg: "red.700" }}
              mt={4}
              onClick={() => setImages([])}
              mb={"10px"}
            >
              Clear All
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default InputFile;
