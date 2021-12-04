import styles from "../styles/Home.module.css";
import Head from "next/head";
import GameList from "../components/GameList";
import { Box, Container, Stack, Pagination } from "@mui/material";
import { useState } from "react";
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
