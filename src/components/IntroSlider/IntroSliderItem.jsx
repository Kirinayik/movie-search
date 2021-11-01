import React from "react";
import {Box, Button, Heading, Stack, Text} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import {setRating} from "../../core/setRating";
import {formatOverview} from "../../core/formatOverview";
import {GenreInfo} from "../../common/GenreInfo";

export const IntroSliderItem = ({
  film: { title, overview, genre_ids, vote_average, backdrop_path },
}) => {
  const genres = useSelector((state) => state.data.genres);
  const config = useSelector((state) => state.data.config);
  const imageUrl = config && config.images.base_url;
  const imageSize = config && config.images.backdrop_sizes[3];

  return (
    <Box
      bg={`url(${imageUrl}${imageSize}${backdrop_path}) center / cover no-repeat`}
      minH={"80vh"}
      position={"relative"}
    >
      <Box
        maxW={"620px"}
        position={"absolute"}
        top={"168px"}
        left={{ base: "75px", lg: "190px" }}
      >
        <Stack
          alignItems={"flex-start"}
          spacing={"16px"}
          pb={{ base: "56px", "2xl": "90px" }}
          pr={{ base: "20px", lg: "0" }}
          position={"relative"}
          minH={"416px"}
        >
          <GenreInfo genres={genres} genre_ids={genre_ids} />
          <Box>{setRating(vote_average)}</Box>
          <Heading
            fontSize={{ base: "24px", md: "36px", lg: "56px", "2xl": "75px" }}
            lineHeight={{ base: "1.5", lg: "64px", "2xl": "1.5" }}
          >
            {title}
          </Heading>
          <Text
            fontSize={{ base: "16px", "2xl": "24px" }}
            lineHeight={"32px"}
            fontWeight={"400"}
          >
            {formatOverview(overview)}
          </Text>
          <Button
            position={"absolute"}
            left={"0"}
            bottom={"0"}
            w={{ base: "150px", lg: "200px" }}
            h={{ base: "56px" }}
            fontSize={"16px"}
            fontWeight={"400"}
            border={"1px solid rgba(225, 8, 86, 0.5);"}
            boxShadow={"0px 16px 16px 4px rgba(0, 0, 0, 0.12)"}
            borderRadius={"40px"}
            transition={"all .3s ease-in-out"}
            bg={"rgba(245, 101, 101, 0.5)"}
            _hover={{ background: "red.300" }}
            zIndex={15}
          >
            Watch now
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};