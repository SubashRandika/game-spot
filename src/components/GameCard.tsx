import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";

import CriticScore from "./CriticScore";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((pp) => pp.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading size={{ sm: "lg", md: "md", lg: "md", xl: "md" }}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
