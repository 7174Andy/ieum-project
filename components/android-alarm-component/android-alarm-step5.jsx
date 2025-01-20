"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import { useTheme } from "@mui/material/styles";

import Screen from "../../public/images/android-alarm-page-4.png";

import MissClickPopup from "../miss-click-popup";
import RecordingPopup from "../recording-popup";

const TTS_TEXT =
  "알람이 저장되면 몇 시간 후에 알람이 울리는지 화면 하단에 알림으로 표시되는 걸 확인하실 수 있습니다.";

export default function AndroidAlarmPage5({ handleNext, handlers }) {
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
        className="clickable-box"
        sx={{
          position: "absolute",
          border: `5px solid ${theme.palette.primary.main}`,
          borderRadius: "12px",
          py: "13%",
          px: "40%",
          bottom: "9%",
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
