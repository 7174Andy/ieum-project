"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import { useTheme } from "@mui/material/styles";

import Screen from "../../public/images/kakao-voice-message-page-1.png";

import MissClickPopup from "../miss-click-popup";
import RecordingPopup from "../recording-popup";
import { glow } from "../glow";

const TTS_TEXT =
  "원하시는 사람과의 채팅을 클릭하면 나오는 화면입니다. 하단에 있는 화살표를 누른 후, 음성메세지를 골라서 눌러주세요.";

export default function VoicePage2({ handleNext, handlers }) {
  const theme = useTheme();
  const [missClicksCount, setMissclickCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openSound, setOpenSound] = useState(false);

  const handleMissClick = (event) => {
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
      onClick={handleMissClick}
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
          py: "11%",
          px: "10%",
          bottom: "13%",
          right: "5%",
          animation: `${glow} 2s infinite`,
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
        handleClose={() => setOpenSound(false)}
        open={openSound}
      />
    </Box>
  );
}
