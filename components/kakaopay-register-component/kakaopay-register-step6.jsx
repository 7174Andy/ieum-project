"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useTheme } from "@mui/material/styles";

import Screen from "../../public/images/kakaopay-register-page-6.png";

import MissClickPopup from "../miss-click-popup";
import { glow } from "../glow";

export default function RegisterPage6({ handleNext, handlers }) {
  const theme = useTheme();
  const [missClicksCount, setMissclickCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [step, setStep] = useState(0);

  const handleMissClick = (event) => {
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
    if (step === 0) {
      setStep(1);
    } else {
      setStep(0);
    }
  };

  const handleMiddleBoxClick = () => {
    if (step === 1) {
      setStep(2);
    } else {
      setStep(0);
    }
  };

  const handleBottomBoxClick = () => {
    if (step === 2) {
      setStep(3);
      handleNext();
      setStep(0);
      s;
    } else {
      setStep(0);
    }
  };

  return (
    <Box
      onClick={handleMissClick}
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
          py: "8%",
          px: "46%",
          top: "18%",
          animation: `${step === 0 ? `${glow} 2s infinite` : "none"}`,
        }}
      ></Box>
      <Typography
        sx={{
          position: "absolute",
          top: "8%",
          right: "0%",
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
        onClick={handleMiddleBoxClick}
        className="clickable-box"
        sx={{
          position: "absolute",
          border: `5px solid ${theme.palette.primary.main}`,
          borderRadius: "12px",
          py: "8%",
          px: "46%",
          top: "28%",
          animation: `${step === 1 ? `${glow} 2s infinite` : "none"}`,
        }}
      ></Box>
      <Typography
        sx={{
          position: "absolute",
          top: "35%",
          right: "0%",
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
      <Box
        onClick={handleBottomBoxClick}
        className="clickable-box"
        sx={{
          position: "absolute",
          border: `5px solid ${theme.palette.primary.main}`,
          borderRadius: "12px",
          py: "8%",
          px: "46%",
          bottom: "1%",
          animation: `${step === 2 ? `${glow} 2s infinite` : "none"}`,
        }}
      ></Box>
      <Typography
        sx={{
          position: "absolute",
          bottom: "15%",
          right: "0%",
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
        3
      </Typography>
      <Button
        onClick={handleNext}
        className="arrow-button"
        sx={{ position: "absolute", bottom: "1rem", right: "0rem" }}
      >
        <ArrowCircleRightOutlinedIcon sx={{ width: "3rem", height: "3rem" }} />
      </Button>
      <MissClickPopup handleClose={handleClose} open={openModal} />
    </Box>
  );
}
