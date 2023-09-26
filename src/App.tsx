import { Grid, GridItem, Show } from "@chakra-ui/react";

import GamesGrid from "./components/GamesGrid";
import { Genre } from "./hooks/useGenres";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { useState } from "react";

function App() {
  const [seletedGenre, setSeletedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={seletedGenre}
            onSelectGenre={(genre) => setSeletedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector />
        <GamesGrid selectedGenre={seletedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
