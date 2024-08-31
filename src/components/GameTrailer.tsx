import { AspectRatio } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailers = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  const first = data?.results[0];

  return first ? (
    <AspectRatio ratio={16 / 9}>
      <video controls src={first.data?.[480]} poster={first.preview} />
    </AspectRatio>
  ) : null;
};

export default GameTrailers;
