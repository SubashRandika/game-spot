import {
  Box,
  GridItem,
  SimpleGrid,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GameDetailsSkeleton = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Skeleton height="30px" width="30%" marginBottom={2} />
        <SkeletonText noOfLines={3} spacing={3} />
        <SimpleGrid columns={2} as="dl">
          <Box marginY={5}>
            <SkeletonText noOfLines={3} width="40%" />
          </Box>
          <Box marginY={5}>
            <SkeletonText noOfLines={3} width="40%" />
          </Box>
          <Box marginY={5}>
            <SkeletonText noOfLines={3} width="40%" />
          </Box>
          <Box marginY={5}>
            <SkeletonText noOfLines={3} width="50%" />
          </Box>
        </SimpleGrid>
      </GridItem>
      <GridItem>
        <Skeleton height="250px" marginBottom={2} />
        <SimpleGrid columns={2} spacing={2}>
          <Skeleton height="150px" />
          <Skeleton height="150px" />
          <Skeleton height="150px" />
          <Skeleton height="150px" />
        </SimpleGrid>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsSkeleton;
