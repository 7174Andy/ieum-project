"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useTheme } from "@mui/material/styles";

import Screen from "../../public/images/kakao-taxi-page-3.png";

import MissClickPopup from "../miss-click-popup";
import { glow } from "../glow";

export default function KakaoTaxiPage3({ handleNext, handlers }) {
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
    }
  };

  const handleBottomBoxClick = () => {
    if (step === 1) {
      setStep(2);
      handleNext();
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
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
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
          py: "5%",
          px: "30%",
          top: "10%",
          left: "0%",
          animation: `${step === 0 ? glow : ""} 2s infinite`,
        }}
      ></Box>
      <Typography
        sx={{
          position: "absolute",
          top: "13%",
          left: "60%",
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
          p: "5%",
          top: "23%",
          right: "1%",
          animation: `${step === 1 ? glow : ""} 2s infinite`,
        }}
      ></Box>
      <Typography
        sx={{
          position: "absolute",
          top: "27%",
          right: "5%",
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
