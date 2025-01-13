"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useTheme } from "@mui/material/styles";

import Screen from "../../public/images/kakao-picture-page-3.png";

import MissClickPopup from "../miss-click-popup";
import { glow } from "../glow";

export default function PicturePage3({ handleNext, handlers }) {
  const theme = useTheme();
  const [missClicksCount, setMissclickCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [steps, setSteps] = useState(0);

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

  const handleTopBoxClick = () => {
    if (steps === 0) {
      setSteps(1);
    }
  };

  const handleBottomBoxClick = () => {
    if (steps === 1) {
      setSteps(2);
      handleNext();
    }
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
        width: "97vw",
        position: "relative",
      }}
      {...handlers}
    >
      <Box
        onClick={handleTopBoxClick}
        className="clickable-box"
        sx={{
          position: "absolute",
          border: `5px solid ${theme.palette.primary.main}`,
          borderRadius: "12px",
          p: "3%",
          bottom: "30%",
          left: "31%",
          animation: `${step === 0 ? `${glow} 2s infinite` : "none"}`,
        }}
      ></Box>
      <Typography
        sx={{
          position: "absolute",
          bottom: "28%",
          left: "25%",
          transform: "translate(-50%, 50%)",
          color: theme.palette.primary.main,
          fontWeight: "bold",
          fontSize: "1.5rem",
          backgroundColor: "white",
          padding: "0rem 0.75rem",
          borderRadius: "50%",
          textAlign: "center",
          border: `4px solid ${theme.palette.primary.main}`,
        }}
      >
        1
      </Typography>
      <Box
        onClick={handleBottomBoxClick}
        className="clickable-box"
        sx={{
          position: "absolute",
          border: `5px solid ${theme.palette.primary.main}`,
          borderRadius: "12px",
          p: "3%",
          bottom: "30%",
          right: "16%",
          animation: `${step === 1 ? `${glow} 2s infinite` : "none"}`,
        }}
      ></Box>
      <Typography
        sx={{
          position: "absolute",
          bottom: "28%",
          right: "15%",
          transform: "translate(-50%, 50%)",
          color: theme.palette.primary.main,
          fontWeight: "bold",
          fontSize: "1.5rem",
          backgroundColor: "white",
          padding: "0rem 0.75rem",
          borderRadius: "50%",
          textAlign: "center",
          border: `4px solid ${theme.palette.primary.main}`,
        }}
      >
        2
      </Typography>
      <Button
        onClick={handleNext}
        className="arrow-button"
        sx={{ position: "absolute", bottom: "1rem", right: "-1rem" }}
      >
        <ArrowCircleRightOutlinedIcon sx={{ width: "3rem", height: "3rem" }} />
      </Button>
      <MissClickPopup handleClose={handleClose} open={openModal} />
    </Box>
  );
}
