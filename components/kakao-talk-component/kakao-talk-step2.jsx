"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import { useTheme } from "@mui/material/styles";

import Screen from "../../public/images/kakao-voice-page-2.png";

import MissClickPopup from "../miss-click-popup";
import RecordingPopup from "../recording-popup";
import { glow } from "../glow";

const TTS_TEXT = '"통화하기”라고 쓰여져 있는 동그라미를 눌러주세요.';

export default function TalkPage2({ handleNext, handlers }) {
  const theme = useTheme();
  const [missClicksCount, setMissclickCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openSound, setOpenSound] = useState(false);

  const handleMisClick = (event) => {
    if (
      !event.target.closest(".clickable-box") &&
      !event.target.closest(".arrow-button") &&
      !event.target.closest(".headphone-button") &&
      !openSound &&
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
        width: "97vw",
        position: "relative",
      }}
      {...handlers}
    >
      <Button
        onClick={() => setOpenSound(true)}
        className="headphone-button"
        sx={{ position: "absolute", top: "1rem", right: "1rem" }}
      >
        <HeadphonesRoundedIcon sx={{ width: "3rem", height: "3rem" }} />
      </Button>
      <Box
        onClick={handleNext}
        className="clickable-box"
        sx={{
          position: "absolute",
          border: `5px solid ${theme.palette.primary.main}`,
          borderRadius: "12px",
          py: "11%",
          px: "10%",
          bottom: "14%",
          right: "0%",
          animation: `${glow} 2s infinite`,
          [theme.breakpoints.up("xl")]: {
            py: "11%",
            px: "10%",
            right: "6%",
          },
          [theme.breakpoints.up("lg")]: {
            py: "11%",
            px: "10%",
            right: "6%",
          },
          [theme.breakpoints.down("md")]: {
            py: "11%",
            px: "10%",
            right: "2%",
            bottom: "17%",
          },
        }}
      ></Box>
      <Button
        onClick={handleNext}
        className="arrow-button"
        sx={{ position: "absolute", bottom: "1rem", right: "-1rem" }}
      >
        <ArrowCircleRightOutlinedIcon sx={{ width: "3rem", height: "3rem" }} />
      </Button>
      <MissClickPopup handleClose={handleClose} open={openModal} />
      <RecordingPopup
        text={TTS_TEXT}
        open={openSound}
        handleClose={() => setOpenSound(false)}
      />
    </Box>
  );
}
