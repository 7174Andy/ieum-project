"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import { useTheme } from "@mui/material/styles";

import Screen from "../../public/images/kakao-picture-page-3.png";

import MissClickPopup from "../miss-click-popup";
import RecordingPopup from "../recording-popup";
import { glow } from "../glow";

const TTS_TEXT =
  "전송을 원하시는 사진을 눌러주세요. 하단에 있는 전체를 누르면 전체 사진첩이 보입니다.";

export default function PicturePage3({ handleNext, handlers }) {
  const theme = useTheme();
  const [missClicksCount, setMissclickCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [steps, setSteps] = useState(0);
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

  const handleTopBoxClick = () => {
    if (steps === 0) {
      setSteps(1);
    }
  };

  const handleBottomBoxClick = () => {
    if (steps === 1) {
      setSteps(2);
      handleNext();
      setSteps(0);
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
        onClick={handleTopBoxClick}
        className="clickable-box"
        sx={{
          position: "absolute",
          border: `5px solid ${theme.palette.primary.main}`,
          borderRadius: "12px",
          p: "3%",
          bottom: "30%",
          left: "31%",
          animation: `${steps === 0 ? `${glow} 2s infinite` : "none"}`,
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
          animation: `${steps === 1 ? `${glow} 2s infinite` : "none"}`,
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
      <RecordingPopup
        text={TTS_TEXT}
        open={openSound}
        handleClose={() => setOpenSound(false)}
      />
    </Box>
  );
}
