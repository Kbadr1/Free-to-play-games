import React from "react";
import Head from "next/head";
import GameList from "../../components/GameList";
import { Box } from "@mui/material";
import Header from "../../components/Header";

export default function PC({ games }) {
  return (
    <Box>
      <Head>
        <title>Free PC Games</title>
      </Head>
      <Header text={`PC Games`} />
      <GameList games={games} />
    </Box>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    `https://www.freetogame.com/api/games?platform=pc`
  );
  const games = await response.json();
  return {
    props: {
      games,
    },
  };
};
