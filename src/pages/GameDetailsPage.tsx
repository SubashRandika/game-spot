import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameDetailsSkeleton from "../components/GameDetailsSkeleton";
import useGame from "../hooks/useGame";
import GameTrailers from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

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
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailers gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </div>
  );
};

export default GameDetailsPage;
