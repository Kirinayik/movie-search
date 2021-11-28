import React, {useEffect} from "react";
import {Box, Container, Flex, Grid, Heading, Input, VStack,} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {
  nextPageAction,
  prevPageAction,
  setSearchQueryAction,
  singleSearchRequestAction,
} from "../../features/modules/singleSearch/singleSearch.actions";
import {ProductCard} from "../ProductsCards/ProductCard";
import {SearchDetails} from "./SearchDetails";
import {Pagination} from "../Pagination/Pagination";

export const SearchCards = ({ product }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.singleSearch.searchQuery);
  const products = useSelector((state) =>
    product === "movie"
      ? state.singleSearch.searchMovies
      : state.singleSearch.searchSerials
  );
  const page = products && products.page
  const totalPages = products && products.total_pages
  
  const handleSearch = (e) => {
    dispatch(setSearchQueryAction(e.target.value));
  };
  
  const handleNext = (currentPage) => {
    dispatch(nextPageAction())
    dispatch(singleSearchRequestAction(searchQuery, currentPage))
  }
  
  const handlePrev = (currentPage) => {
    dispatch(prevPageAction())
    dispatch(singleSearchRequestAction(searchQuery, currentPage))
  }

  useEffect(() => {
    if (searchQuery.trim()) {
      dispatch(singleSearchRequestAction(searchQuery, 1));
    }
  }, [searchQuery]);
  
  return (
    <Container>
      <Box py={"24px"}>
        <VStack alignItems={"flex-start"} spacing={"20px"}>
          <Heading>Search</Heading>
          <Input
            value={searchQuery}
            onChange={handleSearch}
            fontSize={"20px"}
            p={"30px 40px"}
            w={"100%"}
            placeholder={"Search for a movie or tv show"}
          />
        </VStack>
      </Box>
      {searchQuery.trim().length > 0 && (
        <Flex
          w={"100%"}
          alignItems={{ base: "center", "2md": "flex-start" }}
          flexDir={{ base: "column", "2md": "row" }}
        >
          <SearchDetails product={product} />
          <Box flex={"1 1 auto"} w={{ base: "100%", "2md": "auto" }}>
            <Grid
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              gap={"20px"}
              mb={"50px"}
            >
                {products.results &&
                products.results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
            <Pagination prevAction={handlePrev} nextAction={handleNext} totalPages={totalPages} page={page}/>
          </Box>
        </Flex>
      )}
    </Container>
  );
};