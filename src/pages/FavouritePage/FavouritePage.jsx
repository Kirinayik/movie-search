import React from "react";
import {Box} from "@chakra-ui/react";
import {FavouriteCards} from "../../components/FavouriteCards/FavouriteCards";

export const FavouritePage = () => {
  return (
    <Box minH={"100vh"}>
      <Box pt={{ base: "100px", "2md": "0" }} pl={{ base: "0", "2md": "56px" }}>
        <FavouriteCards />
      </Box>
    </Box>
  );
};
