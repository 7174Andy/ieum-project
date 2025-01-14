"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import { useTheme } from "@mui/material/styles";

import Screen from "../../public/images/kakao-save-page-1.png";

import MissClickPopup from "../miss-click-popup";
import RecordingPopup from "../recording-popup";
import { glow } from "../glow";

const TTS_TEXT =
  "원하시는 사람과의 채팅을 클릭하면 나오는 화면입니다. 보이시는 것과 같이 사진이 전송되어 있는 것을 확인하실 수 있습니다. 저장을 원하시는 사진을 눌러주세요.";

export default function SavePage1({ handleNext, handlers }) {
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
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "contain",
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
          py: "16%",
          px: "35%",
          bottom: "10%",
          right: "1%",
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
        open={openSound}
        handleClose={() => setOpenSound(false)}
        text={TTS_TEXT}
      />
    </Box>
  );
}
