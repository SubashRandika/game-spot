import {
  Box,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const GameDetailsSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="30px" width="30%" />
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
    </Stack>
  );
};

export default GameDetailsSkeleton;
