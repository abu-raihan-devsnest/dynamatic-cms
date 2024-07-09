import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Image } from "@chakra-ui/react";

const InputFile = ({ uploadingText }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
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
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload" style={{ width: "100%", height: "100%" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          cursor="pointer"
        >
          <Image src="Icons.svg" boxSize={8} mb={2} color="#00aaff" />
          <Text fontSize="13px" fontWeight="550" mb={1}>
            {uploadingText}
          </Text>
          <Text color="#374144" fontSize="12px" fontWeight="400">
            Asset Less than 1 MB. Width 300px, height 250px
          </Text>
        </Box>
      </label>
      {file && (
        <Text mt={2} fontSize="sm" color="gray.700">
          {file.name}
        </Text>
      )}
    </Box>
  );
};

export default InputFile;
