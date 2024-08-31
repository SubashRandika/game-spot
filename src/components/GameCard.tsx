import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import getCroppedImageUrl from "../services/image-url";
import PlatformIconList from "./PlatformIconList";
import { Card, CardBody, Flex, Heading, HStack, Image } from "@chakra-ui/react";
import Game from "../entities/Game";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card variant="filled">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((pp) => pp.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Flex alignItems="center">
          <Heading size={{ sm: "lg", md: "md", lg: "md", xl: "md" }}>
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
          </Heading>
          <Emoji rating={game.rating_top} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;
