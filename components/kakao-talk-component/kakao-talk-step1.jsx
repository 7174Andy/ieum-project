"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import { useTheme } from "@mui/material/styles";

import Screen from "../../public/images/kakao-voice-page-1.png";

import MissClickPopup from "../miss-click-popup";
import { glow } from "../glow";
import RecordingPopup from "../recording-popup";

const TTS_TEXT =
  "원하시는 사람과의 채팅을 클릭하면 나오는 화면입니다. 하단에 있는 화살표를 눌러주세요.";

export default function TalkPage1({ handleNext, handlers }) {
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
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        height: "100vh",
        width: "97vw",
        position: "relative",
      }}
      {...handlers}
    >
      <Button
        onClick={() => setOpenSound(true)}
        className="headphone-button"
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
      >
        <HeadphonesRoundedIcon
          sx={{
            width: "3rem",
            height: "3rem",
          }}
        />
      </Button>
      <Box
        onClick={handleNext}
        className="clickable-box"
        sx={{
          position: "absolute",
          border: `5px solid ${theme.palette.primary.main}`,
          borderRadius: "12px",
          padding: "4%",
          bottom: "2%",
          left: "0%",
          animation: `${glow} 2s infinite`,
          [theme.breakpoints.up("xl")]: {
            left: "6%",
          },
          [theme.breakpoints.up("lg")]: {
            left: "4%",
          },
          [theme.breakpoints.up("md")]: {
            left: "2%",
          },
        }}
      ></Box>
      <Button
        onClick={handleNext}
        className="arrow-button"
        sx={{
          position: "absolute",
          bottom: "2rem",
          right: "1rem",
        }}
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
