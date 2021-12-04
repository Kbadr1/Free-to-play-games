import Head from "next/head";
import GameList from "../components/GameList";
import { Box } from "@mui/material";
import Header from "../components/Header";

export default function Home({ games }) {
  return (
    <Box>
      <Head>
        <title>Free Games</title>
      </Head>
      <Header text={`All Free Games`} />
      <GameList games={games} />
    </Box>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    `https://www.freetogame.com/api/games?platform=all&sort-by=popularity`
  );
  const games = await response.json();
  return {
    props: {
      games,
    },
  };
};
