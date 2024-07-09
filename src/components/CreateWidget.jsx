import {
  Box,
  Button,
  HStack,
  Text,
  Textarea,
  Grid,
  Select,
  Switch,
} from "@chakra-ui/react";
import HeaderTitle from "./HeaderTitle";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import BodyBG from "./BodyBG";
import InputFile from "./InputFile";

const CreateWidget = () => {
  return (
    <BodyBG>
      <Grid justifyContent="center" py="20px">
        <HeaderTitle titleText="Create widget" />
        <Box mt="10px" borderRadius="12px" p="16px" boxShadow='base' w="700px" bgColor="#FFFFFF" >
          
</Box>
        <Box
          bgColor="#FFFFFF"
          mt="10px"
          borderRadius="12px"
          p="16px"
          w="700px"
          boxShadow="base"
        >
          <FormControl>
            <FormLabel fontSize='13px' fontWeight="550">Widget title</FormLabel>
            <Input
              bgColor="#F8F8F8"
              border="1px"
              borderColor="#EEEEEE"
              w="668px"
              h="36px"
              py="12px"
              px="8px"
              type="text"
              variant="unstyled"
              placeholder="write here"
            />
            <FormLabel mt="4px" fontSize='13px' fontWeight="550">Widget description</FormLabel>
            <Textarea
              w="668px"
              h="80px"
              bgColor="#F8F8F8"
              border="1px"
              px="8px"
              py="12px"
              borderColor="#EEEEEE"
              type="text"
              variant="unstyled"
              placeholder="write here"
              resize="none"
            />
            <Box display="flex" alignItems="center" mt="4px">
              <FormLabel htmlFor="badge" fontSize='13px' fontWeight="550" >
                Show/hide badge
              </FormLabel>
              <Switch id="badge" color="#00B2FF" size="sm" />
            </Box>
            <HStack gap="12px" mt="4px">
              <Box w="67px" h="67px" border="1px" borderRadius="8px" borderColor="#EBEBEB"></Box>
              <Grid gap='10px'>
                <Text fontSize='13px' fontWeight="550"  >Bundle badge</Text>
                <Button fontSize='13px' fontWeight="550" color="#00AEF9" bgColor="#D0EEFF" w="123px" h='32px' p='8px' borderRadius='6px'>Choose badge</Button>
              </Grid>
            </HStack>
            <FormLabel mt="4px" fontSize='13px' fontWeight="550">Badge text</FormLabel>
            <Input
              bgColor="#F8F8F8"
              border="1px"
              borderRadius="8px"
              borderColor="#EEEEEE"
              w="668px"
              h="36px"
              py="12px"
              px="8px"
              type="text"
              variant="unstyled"
              placeholder="write here"
            />

            <FormLabel
              mt="4px" fontSize='13px' fontWeight="550">Select pages</FormLabel>
            <Select
              bgColor="#F8F8F8"
              border="1px"
              borderColor="#EEEEEE"
              w="668px"
              h="36px"
              // py="12px"
              variant="unstyled"
              placeholder="Select one"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <FormLabel mt="4px" fontSize='13px' fontWeight="550">Select categories</FormLabel>
            <Select
              bgColor="#F8F8F8"
              border="1px"
              borderColor="#EEEEEE"
              w="668px"
              h="36px"
              // py="12px"
              variant="unstyled"
              placeholder="Select one"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <FormLabel mt="4px" fontSize='13px' fontWeight="550">Widget details</FormLabel>
            <Textarea
              w="668px"
              h="80px"
              bgColor="#F8F8F8"
              border="1px"
              px="8px"
              py="12px"
              borderColor="#EEEEEE"
              type="text"
              variant="unstyled"
              placeholder="write here"
              resize="none"
            />
            <InputFile></InputFile>
            <HStack mt="8px" spacing="12px" justify="space-between">
              <Button
                borderRadius="8px"
                p="8px"
                w="328px"
                h="40px"
                bgColor="#EBEBEB"
                color="#374144"
              >
                Reset
              </Button>
              <Button
                borderRadius="8px"
                p="8px"
                w="328px"
                h="40px"
                bgColor="#D0EEFF"
                color="#00507C"
              >
                Save widget
              </Button>
            </HStack>
          </FormControl>
        </Box>
        <Button
          mt="10px"
          bgColor="#00B2FF"
          w="700px"
          color="#FFFFFF"
          p="8px"
          borderRadius="8px"
          fontSize="15px"
          fontWeight="550"
        >
          + Customize another widget
        </Button>
      </Grid>
    </BodyBG>
  );
};

export default CreateWidget;
