"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useTheme } from "@mui/material/styles";

import Screen from "../public/images/kakao-voice-page-3.png";

import MissClickPopup from "./miss-click-popup";

export default function TalkPage3({ handleNext }) {
  const theme = useTheme();
  const [missClicksCount, setMissclickCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleMisClick = (event) => {
    if (
      !event.target.closest(".clickable-box") &&
      !event.target.closest(".arrow-button") &&
      !openModal
    ) {
      setMissclickCount((prevCount) => prevCount + 1);
      if (missClicksCount >= 5) {
        setOpenModal(true);
      }
    }
  };

  const handleClose = () => {
    setOpenModal(false);
    setMissclickCount(0);
  };

  return (
    <Box
      onClick={handleMisClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${Screen.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <Box
        onClick={handleNext}
        className="clickable-box"
        sx={{
          position: "absolute",
          border: `5px solid ${theme.palette.primary.main}`,
          borderRadius: "12px",
          py: "16%",
          px: "48%",
          bottom: "10%",
          right: "0",
        }}
      ></Box>
      <Button
        onClick={handleNext}
        className="arrow-button"
        sx={{ position: "absolute", bottom: "1rem", right: "-1rem" }}
      >
        <ArrowCircleRightOutlinedIcon />
      </Button>
      <MissClickPopup handleClose={handleClose} open={openModal} />
    </Box>
  );
}
