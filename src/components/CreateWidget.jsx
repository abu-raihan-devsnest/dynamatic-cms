import {
  Box,
  Button,
  HStack,
  Text,
  Textarea,
  Grid,
  Select,
  Switch,
  Img,
  FormControl,
} from "@chakra-ui/react";
import HeaderTitle from "./HeaderTitle";
import { FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import BodyBG from "./BodyBG";
import InputFile from "./InputFile";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import dndIcon from "../assets/icons/DndIcon.svg";
import editIcon from "../assets/icons/editIcon.svg";
import deleteIcon from "../assets/icons/deleteIcon.svg";
import recomandationImg from "../assets/images/recomandationImage.png";

const CreateWidget = () => {
  // const [tags, setTags] = useState([]);
  const [widgetList, setWidgetList] = useState([]);
  const [widgetTitle, setWidgetTitle] = useState("");
  const [widgetDetails, setWidgetDetails] = useState("");
  const [widgetDescription, setWidgetDescription] = useState("");
  const [badgeText, setBadgeText] = useState("");
  const [selectType, setSelectType] = useState("");

  const handleCreateWidget = (e) => {
    e.preventDefault();
    const generateId = () => `_${Math.random().toString(36).substr(2, 9)}`;

    const fullWidget = {
      selectType,
      widgetTitle,
      widgetDescription,
      badgeText,
      widgetDetails,
      id: generateId(),
    };
    setWidgetList([...widgetList, fullWidget]);
    setWidgetTitle("");
  };

  console.log(widgetList);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedList = Array.from(widgetList);
    const [movedItem] = reorderedList.splice(result.source.index, 1);
    reorderedList.splice(result.destination.index, 0, movedItem);
    setWidgetList(reorderedList);
  };

  return (
    <BodyBG>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box width={{ base: "100%", md: "700px" }}>
          <HeaderTitle titleText="Create widget" />
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable-boxes">
              {(provided) => (
                <Box {...provided.droppableProps} ref={provided.innerRef}>
                  {widgetList?.map((widget, idx) => (
                    <Draggable
                      key={widget.id}
                      draggableId={widget.id}
                      index={idx}
                    >
                      {(provided) => (
                        <Box
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          display={"flex"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                          bg={"#FFFFFF"}
                          boxShadow={
                            "0px 1px 0px 0px #CCCCCC80 inset,0px -1px 0px 0px #0000002B inset,-1px 0px 0px 0px #00000021 inset,1px 0px 0px 0px #00000021 inset,0px 1px 0px 0px #1A1A1A12"
                          }
                          borderRadius={"12px"}
                          padding={"16px"}
                          mb="14px"
                          cursor={"grab"}
                        >
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            gap={"8px"}
                          >
                            <Img src={dndIcon} />
                            <Box display={'flex'} gap={'6px'} alignItems={'center'}>
                              <Img
                                src={recomandationImg}
                                width={"40px"}
                                height={"40px"}
                                borderRadius={"8px"}
                                border={"1px solid #EBEBEB"}
                              />
                              <Box>
                                <Text
                                  fontFamily={'"Inter", sans-serif'}
                                  fontWeight={"600"}
                                  fontSize={"13px"}
                                  lineHeight={"18.2px"}
                                  color={"#00070B"}
                                >
                                  {widget.widgetTitle}
                                </Text>
                                <Text
                                  fontWeight={"400"}
                                  fontSize={"12px"}
                                  lineHeight={"18px"}
                                  color={"#B1B1B1"}
                                >
                                  {`${widgetDescription}`}
                                </Text>
                              </Box>
                            </Box>
                          </Box>
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            gap={"12px"}
                          >
                            <Img
                              src={editIcon}
                              bg={"#FFE8ED"}
                              borderRadius={"4px"}
                              padding={"5px"}
                              height={"30px"}
                              width={"30px"}
                              _hover={{ bg: "#f8d6dd" }}
                              cursor={"pointer"}
                            />
                            <Img
                              src={deleteIcon}
                              bg={"#D0EEFF"}
                              borderRadius={"4px"}
                              padding={"5px"}
                              height={"30px"}
                              width={"30px"}
                              _hover={{ bg: "#c1e6fc" }}
                              cursor={"pointer"}
                            />
                          </Box>
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </DragDropContext>

          <Box
            bgColor="#FFFFFF"
            mt="10px"
            borderRadius="12px"
            p="16px"
            boxShadow="base"
          >
            <FormControl>
              <FormLabel fontSize="13px" fontWeight="550">
                Widget title
              </FormLabel>
              <Input
                name="widgetTitle"
                value={widgetTitle}
                onChange={(e) => setWidgetTitle(e.target.value)}
                bgColor="#F8F8F8"
                border="1px"
                borderColor="#EEEEEE"
                // w="668px"
                h="36px"
                py="12px"
                px="8px"
                type="text"
                variant="unstyled"
                placeholder="write here"
                padding={"8px "}
              />
              <FormLabel mt="8px" fontSize="13px" fontWeight="550">
                Widget description
              </FormLabel>
              <Textarea
                // w="668px"
                name="widgetDescription"
                value={widgetDescription}
                onChange={(e) => setWidgetDescription(e.target.value)}
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
              <Box display="flex" alignItems="center" mt="8px">
                <FormLabel htmlFor="badge" fontSize="13px" fontWeight="550">
                  Show/hide badge
                </FormLabel>
                <Switch id="badge" color="#00B2FF" size="sm" />
              </Box>
              <HStack gap="12px" mt="4px">
                <Box
                  w="67px"
                  h="67px"
                  border="1px"
                  borderRadius="8px"
                  borderColor="#EBEBEB"
                ></Box>
                <Grid gap="10px">
                  <Text fontSize="13px" fontWeight="550">
                    Bundle badge
                  </Text>
                  <Button
                    fontSize="13px"
                    fontWeight="550"
                    color="#00AEF9"
                    bgColor="#D0EEFF"
                    w="123px"
                    h="32px"
                    p="8px"
                    borderRadius="6px"
                  >
                    Choose badge
                  </Button>
                </Grid>
              </HStack>
              <FormLabel mt="8px" fontSize="13px" fontWeight="550">
                Badge text
              </FormLabel>
              <Input
                name="badgeText"
                value={badgeText}
                onChange={(e) => setBadgeText(e.target.value)}
                bgColor="#F8F8F8"
                border="1px"
                borderRadius="8px"
                borderColor="#EEEEEE"
                // w="668px"
                h="36px"
                py="12px"
                px="8px"
                type="text"
                variant="unstyled"
                placeholder="write here"
              />
              <FormLabel mt="8px" fontSize="13px" fontWeight="550">
                Select pages
              </FormLabel>
              <Select
                bgColor="#F8F8F8"
                border="1px"
                borderColor="#EEEEEE"
                w="668px"
                h="36px"
                _focusVisible={{
                  outline: "none",
                }}
                placeholder="Select one"
                // p={'8px 12px'}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <FormLabel mt="8px" fontSize="13px" fontWeight="550">
                Select categories
              </FormLabel>
              <Select
                bgColor="#F8F8F8"
                border="1px"
                borderColor="#EEEEEE"
                h="36px"
                _focusVisible={{
                  outline: "none",
                }}
                placeholder="Select one"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <FormLabel mt="8px" fontSize="13px" fontWeight="550">
                Widget details
              </FormLabel>
              <Textarea
                // w="668px"
                name="widgetDetails"
                value={widgetDetails}
                onChange={(e) => setWidgetDetails(e.target.value)}
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
              <InputFile uploadingText="Upload asset"></InputFile>
              <HStack mt="8px" spacing="12px" justify="space-between">
                <Button
                  borderRadius="8px"
                  p="8px"
                  w="100%"
                  h="40px"
                  bgColor="#EBEBEB"
                  color="#374144"
                  onClick={() => {
                    setWidgetTitle("");
                  }}
                >
                  Reset
                </Button>
                <Button
                  _hover={{ bg: "#C4E8FE" }}
                  _focus={{ bg: "#B4E08E" }}
                  borderRadius="8px"
                  p="8px"
                  w="100%"
                  h="40px"
                  bgColor="#D0EEFF"
                  color="#00507C"
                  onClick={handleCreateWidget}
                >
                  Save widget
                </Button>
              </HStack>
            </FormControl>
          </Box>
          <Button
            mt="10px"
            bgColor="#00B2FF"
            w="100%"
            color="#FFFFFF"
            p="8px"
            borderRadius="8px"
            fontSize="15px"
            fontWeight="550"
          >
            + Customize another widget
          </Button>
        </Box>
      </Box>
    </BodyBG>
  );
};

export default CreateWidget;
