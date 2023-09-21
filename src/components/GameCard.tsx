import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading size={{ sm: "lg", md: "md", lg: "md", xl: "md" }}>
          {game.name}
        </Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((pp) => pp.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
