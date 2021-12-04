import React from "react";
import GameItemStyles from "../styles/GameItem.module.css";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import Link from "next/link";

const GameItem = ({ game }) => {
  return (
    <Link href="/game/[id]" as={`/game/${game.id}`}>
      <Card className={GameItemStyles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={game.thumbnail}
            alt="news image"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h4">
              {game.title}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="p">
              {game.short_description}
            </Typography>
            <Typography variant="subtitle2" className={GameItemStyles.genre}>
              {game.genre}
            </Typography>
            <Typography variant="subtitle2" className={GameItemStyles.platform}>
              {game.platform}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default GameItem;
