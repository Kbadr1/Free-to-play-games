import React from "react";
import GameItem from "./GameItem";
import { Box, Container, Grid } from "@mui/material";

const GameList = ({ games }) => {
  return (
    <Box component="div">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {games.map((game) => (
            <>
              <Grid item xs={12} sm={6} md={4}>
                <GameItem game={game} />
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default GameList;
