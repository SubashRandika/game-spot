import { Skeleton, Stack } from "@chakra-ui/react";

const GameDetailsSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="50px" width="25%" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

export default GameDetailsSkeleton;
