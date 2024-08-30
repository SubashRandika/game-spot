import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import GameDetailsSkeleton from "../components/GameDetailsSkeleton";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) {
    return <GameDetailsSkeleton />;
  }

  if (error || !game) {
    throw error;
  }

  return (
    <div>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </div>
  );
};

export default GameDetailsPage;
