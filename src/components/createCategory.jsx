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
import { CloseIcon } from "@chakra-ui/icons";

const CreateCategory = () => {
  const [tags, setTags] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [selectType, setSelectType] = useState("");

  // show hide create category
  const [showCreateCategory, setShowCreateCategory] = useState(false);

  // edit modal hide show
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowCreateCategory = () => {
    if (showCreateCategory) {
      setShowCreateCategory(false);
    } else if (categoryList.length > 0 && showCreateCategory === "true") {
      setShowCreateCategory(false);
      console.log("raihan");
    } else {
      setShowCreateCategory(true);
    }
  };

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
    setShowCreateCategory(false);
  };

  const handleRemoveCategory = (idx) => {
    setCategoryList((prevCategory) => prevCategory.filter((_, i) => i !== idx));
  };

  const handleEditCategory = (id) => {
    const editedItem = categoryList.filter(
      (categoryEdit, idx) => categoryEdit.id === id
    );

    if (showEditModal) {
      setShowEditModal(false);
    } else {
      setShowEditModal(true);
    }
    return editedItem;
  };

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
                              src={deleteIcon}
                              bg={"#FFE8ED"}
                              borderRadius={"4px"}
                              padding={"5px"}
                              height={"30px"}
                              width={"30px"}
                              _hover={{ bg: "#f8d6dd" }}
                              cursor={"pointer"}
                              onClick={() => handleRemoveCategory(idx)}
                            />
                            <Img
                              src={editIcon}
                              bg={"#D0EEFF"}
                              borderRadius={"4px"}
                              padding={"5px"}
                              height={"30px"}
                              width={"30px"}
                              _hover={{ bg: "#c1e6fc" }}
                              cursor={"pointer"}
                              onClick={() =>
                                handleEditCategory(singleFullCategory.id)
                              }
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

          {showCreateCategory && (
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
          )}

          {categoryList.length > 0 ? (
            <Button
              _hover={{ bg: "#0084EF" }}
              _focus={{ bg: "#0086FF" }}
              my="10px"
              bgColor="#00B2FF"
              w="100%"
              color="#FFFFFF"
              p="8px"
              borderRadius="8px"
              fontSize="15px"
              fontWeight="550"
              onClick={handleShowCreateCategory}
            >
              + Create another category
            </Button>
          ) : (
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
          )}

          {/* edit modal  */}
          {showEditModal && (
            <Box
              position="fixed"
              top="0"
              left="0"
              width="100%"
              height="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="rgba(0, 0, 0, 0.6)"
              zIndex="1000"
              padding={{ base: "20px" }}
            >
              <Box
                width={{ base: "100%", md: "700px" }}
                borderRadius={"12px"}
                padding={"16px"}
                boxShadow={
                  "0px 1px 0px 0px #CCCCCC80 inset, 0px -1px 0px 0px #0000002B inset, -1px 0px 0px 0px #00000021 inset, 1px 0px 0px 0px #00000021 inset, 0px 1px 0px 0px  #1A1A1A12"
                }
                bg={"#FFFFFF"}
                fontFamily={'"Inter", sens-serif'}
              >
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                >
                  <CloseIcon
                    bg={"#CCCCCC80"}
                    padding={"5px"}
                    height={"27px"}
                    width={"27px"}
                    borderRadius={"full"}
                    cursor={"pointer"}
                    _hover={{ bg: "#CCCCCC" }}
                    onClick={() => setShowEditModal(false)}
                  />
                </Box>
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
                    >
                      Update category
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </BodyBG>
  );
};

export default CreateCategory;
