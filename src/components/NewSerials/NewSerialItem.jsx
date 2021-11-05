import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CardBody } from "../../common/CardBody";

export const NewSerialItem = ({
  serial: { name, vote_average, genre_ids, poster_path },
}) => {
  const genres = useSelector((state) => state.data.genres);

  return (
    <Box position={"relative"}>
      <CardBody
        image={poster_path}
        title={name}
        vote_average={vote_average}
        genre_ids={genre_ids}
        genres={genres}
      />
    </Box>
  );
};
