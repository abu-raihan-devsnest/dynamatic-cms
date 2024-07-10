import BodyBG from "./BodyBG";
import {
  Box,
  Button,
  Grid,
  Image,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import InputFile from "./InputFile";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import bannerImg from "../assets/images/bannerSectionImg.png";
import dndIcon from "../assets/icons/DndIcon.svg";
import { useState } from "react";
import HeaderTitle from "./HeaderTitle";
import { CloseIcon } from "@chakra-ui/icons";
const BannerSection = () => {
  const bannerImagesData = [
    {
      img: bannerImg,
      id: 1,
    },
    {
      img: bannerImg,
      id: 2,
    },
    {
      img: bannerImg,
      id: 3,
    },
    {
      img: bannerImg,
      id: 4,
    },
  ];
  const [bannerImages, setBannerImages] = useState(bannerImagesData);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedList = Array.from(bannerImages);
    const [movedItem] = reorderedList.splice(result.source.index, 1);
    reorderedList.splice(result.destination.index, 0, movedItem);
    setBannerImages(reorderedList);
  };

  return (
    <BodyBG>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box width={{ base: "100%", md: "700px" }}>
          <HeaderTitle titleText={"Banner Section"} />
          <Box
            bg={"#FFFFFF"}
            boxShadow={
              "0px 1px 0px 0px #CCCCCC80 inset,0px -1px 0px 0px #0000002B inset, -1px 0px 0px 0px #00000021 inset,1px 0px 0px 0px #00000021 inset,0px 1px 0px 0px #1A1A1A12"
            }
            borderRadius={"12px"}
            padding={"16px"}
          >
            <InputFile uploadingText={"Upload asset"} />
            <Box mt={"16px"}>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable-boxes">
                  {(provided) => (
                    <SimpleGrid
                      columns={{ base: 1, md: 2 }}
                      spacingX={4}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {bannerImages.map((banner, idx) => (
                        <Draggable
                          key={banner.id}
                          draggableId={banner.id.toString()}
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
                                <Img
                                  src={banner.img}
                                  height={"100%"}
                                  width={"full"}
                                />
                              </Box>
                            </Box>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </SimpleGrid>
                  )}
                </Droppable>
              </DragDropContext>
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
                bg={"#00AEF9"}
                color={"#FFFFFF"}
                _hover={{ bg: "#06a2e4" }}
                _focus={{ bg: "#069ad9" }}
                fontSize={"15px"}
                fontWeight={"600"}
              >
                Save banner
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </BodyBG>
  );
};

export default BannerSection;
