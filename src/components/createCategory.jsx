import { Box, Button, FormLabel, Img, Input } from "@chakra-ui/react";
import BodyBG from "./BodyBG";
import HeaderTitle from "./HeaderTitle";
import { Select, Image, Text } from "@chakra-ui/react";
import CategoriesTags from "./CategoriesTags";
import info from "../assets/icons/Info.svg";
import dndIcon from "../assets/icons/DndIcon.svg";
import editIcon from "../assets/icons/editIcon.svg";
import deleteIcon from "../assets/icons/deleteIcon.svg";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const CreateCategory = () => {
  const [tags, setTags] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [selectType, setSelectType] = useState("");

  const handleCreateCategory = (e) => {
    e.preventDefault();
    const generateId = () => `_${Math.random().toString(36).substr(2, 9)}`;

    const fullCategory = {
      selectType,
      categoryTitle,
      tags,
      id: generateId(),
    };
    setCategoryList([...categoryList, fullCategory]);
    setCategoryTitle("");
    setTags([]);
  };

  console.log(categoryList);
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedList = Array.from(categoryList);
    const [movedItem] = reorderedList.splice(result.source.index, 1);
    reorderedList.splice(result.destination.index, 0, movedItem);
    setCategoryList(reorderedList);
  };

  return (
    <BodyBG>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box width={{ base: "100%", md: "700px" }}>
          <HeaderTitle titleText="Create Category" />
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable-boxes">
              {(provided) => (
                <Box {...provided.droppableProps} ref={provided.innerRef}>
                  {categoryList.map((singleFullCategory, idx) => (
                    <Draggable
                      key={singleFullCategory.id}
                      draggableId={singleFullCategory.id}
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
                            <Box>
                              <Text
                                fontFamily={'"Inter", sans-serif'}
                                fontWeight={"600"}
                                fontSize={"13px"}
                                lineHeight={"18.2px"}
                                color={"#00070B"}
                              >
                                {singleFullCategory.categoryTitle}
                              </Text>
                              <Text
                                fontWeight={"400"}
                                fontSize={"12px"}
                                lineHeight={"18px"}
                                color={"#B1B1B1"}
                              >
                                {`${singleFullCategory.tags.length} categories`}
                              </Text>
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
            <form>
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
                  required
                  cursor={"pointer"}
                  _focusVisible={{
                    outline: "none",
                  }}
                  borderRadius={"8px"}
                  border={"1px solid #EBEBEB"}
                  _hover={{ border: "border 1px solid default" }}
                  onChange={(e) => setSelectType(e.target.value)}
                  // placeholder="Select Type"
                >
                  <option selected disabled value="Select Type">
                    Select type
                  </option>
                  <option value="Checkbox">Checkbox</option>
                  <option value="Radio button">Radio button</option>
                  <option value="None">None</option>
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
                  value={categoryTitle}
                  onChange={(e) => setCategoryTitle(e.target.value)}
                  required
                />
              </Box>

              <CategoriesTags tags={tags} setTags={setTags} />

              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
                mt={"5px"}
              >
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
                  onClick={() => {
                    setCategoryTitle("");
                    setTags([]);
                  }}
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
                  onClick={handleCreateCategory}
                >
                  Save category
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </BodyBG>
  );
};

export default CreateCategory;
