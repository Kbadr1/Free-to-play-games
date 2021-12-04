import React, { useState } from "react";
import Link from "next/link";
import { Box, Container, Grid, Typography, Modal } from "@mui/material";
import ShowMoreText from "react-show-more-text";
import gameStyles from "../../../styles/Game.module.css";

const game = ({ game }) => {
  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "0",
    boxShadow: 24,
    p: 0,
  };

  const [activeImg, setActiveImg] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (imgId) => {
    setOpen(true);
    setActiveImg(imgId);
    console.log(imgId);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box component="div" className={gameStyles.game}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* left side (game thumbnail , short description) */}
          <Grid item xs={12} sm={12} md={4}>
            <Grid container spacing={0}>
              <Grid
                item
                sm={3}
                display={{ xs: "none", sm: "block", md: "none" }}
              ></Grid>
              <Grid item xs={12} sm={6} md={12}>
                <img
                  src={game.thumbnail}
                  alt="thumbnail"
                  className={gameStyles.thumbnail_img}
                />
                <Box
                  component="div"
                  className={gameStyles.short_description}
                  display={{ xs: "none", sm: "none", md: "block" }}
                >
                  <Typography vairant="subtitle2">
                    {game.short_description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* right side */}
          <Grid item xs={12} sm={12} md={8}>
            {/* game title & description */}
            <Box component="div" marginBottom={4}>
              <Typography variant="h4" marginBottom={2}>
                {game.title}
              </Typography>
              <Typography vairant="subtitle2">
                <ShowMoreText
                  /* Default options */
                  lines={4}
                  more="+ Read more"
                  less="- Read less"
                  className="content-css"
                  anchorClass="read-more-less"
                  onClick={executeOnClick}
                  expanded={false}
                  // width={280}
                  truncatedEndingComponent={"... "}
                >
                  {game.description}
                </ShowMoreText>
              </Typography>
            </Box>
            {/* additional information */}
            <Box component="div" marginBottom={4}>
              <Typography variant="h5">Additional Information</Typography>
              <hr />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography
                    variant="subtitle1"
                    className={gameStyles.info_title}
                  >
                    Title
                  </Typography>
                  <Typography variant="subtitle2">{game.title}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="subtitle1"
                    className={gameStyles.info_title}
                  >
                    Developer
                  </Typography>
                  <Typography variant="subtitle2">{game.developer}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="subtitle1"
                    className={gameStyles.info_title}
                  >
                    Publisher
                  </Typography>
                  <Typography variant="subtitle2">{game.publisher}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="subtitle1"
                    className={gameStyles.info_title}
                  >
                    Release Date
                  </Typography>
                  <Typography variant="subtitle2">
                    {game.release_date}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="subtitle1"
                    className={gameStyles.info_title}
                  >
                    Genre
                  </Typography>
                  <Typography variant="subtitle2">{game.genre}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="subtitle1"
                    className={gameStyles.info_title}
                  >
                    Platform
                  </Typography>
                  <Typography variant="subtitle2">{game.platform}</Typography>
                </Grid>
              </Grid>
            </Box>
            {/* screenshots */}
            <Box component="div" marginBottom={4}>
              {/* <Typography variant="h5">Screenshots</Typography>
              <hr />
              <Grid container spacing={2}>
                {game.screenshots.slice(0, 4).map((img) => (
                  <Grid item xs={6} sm={3}>
                    <img
                      src={img.image}
                      alt="screenshot"
                      className={gameStyles.screenshot_img}
                    />
                  </Grid>
                ))}
              </Grid> */}
              <Grid container spacing={2}>
                {game.screenshots.slice(0, 4).map((img) => (
                  <>
                    <Grid item xs={6} sm={3}>
                      <img
                        src={img.image}
                        alt="screenshot"
                        className={gameStyles.screenshot_img}
                        onClick={() => handleOpen(img.id)}
                      />
                    </Grid>
                    {img.id === activeImg && (
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <img
                            src={img.image}
                            alt=""
                            style={{ width: "100%" }}
                          />
                        </Box>
                      </Modal>
                    )}
                  </>
                ))}
              </Grid>
            </Box>
            {/* Minimum System Requirements */}
            {game.minimum_system_requirements && (
              <Box component="div">
                <Typography variant="h5">
                  Minimum System Requirements ({game.platform})
                </Typography>
                <hr />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle"
                      className={gameStyles.info_title}
                    >
                      OS
                    </Typography>
                    <Typography variant="subtitle2">
                      {game.minimum_system_requirements.os}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle1"
                      className={gameStyles.info_title}
                    >
                      Processor
                    </Typography>
                    <Typography variant="subtitle2">
                      {game.minimum_system_requirements.processor}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle1"
                      className={gameStyles.info_title}
                    >
                      Memory
                    </Typography>
                    <Typography variant="subtitle2">
                      {game.minimum_system_requirements.memory}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle1"
                      className={gameStyles.info_title}
                    >
                      Graphics
                    </Typography>
                    <Typography variant="subtitle2">
                      {game.minimum_system_requirements.graphics}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle1"
                      className={gameStyles.info_title}
                    >
                      Storage
                    </Typography>
                    <Typography variant="subtitle2">
                      {game.minimum_system_requirements.storage}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle1"
                      className={gameStyles.info_title}
                    >
                      Additional Notes
                    </Typography>
                    <Typography variant="subtitle2">
                      Specifications may change during development
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://www.freetogame.com/api/game?id=${context.params.id}`
  );

  const game = await res.json();

  return {
    props: {
      game,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://www.freetogame.com/api/games`);

  const games = await res.json();

  const ids = games.map((game) => game.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default game;
