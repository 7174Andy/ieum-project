"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useSwipeable } from "react-swipeable";

import Logo from "../../../public/images/kakao-app-logo.png";

import HelpPopup from "../../../components/help-popup";
import TalkPage1 from "../../../components/kakao-talk-step1";
import TalkPage2 from "../../../components/kakao-talk-step2";
import TalkPage3 from "../../../components/kakao-talk-step3";

export default function Talk() {
  const [currPage, setCurrPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handleNext = () => {
    if (currPage < 4) {
      setCurrPage(currPage + 1);
    }
  };

  const handlePrev = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackTouch: true,
    preventScrollOnSwipe: true,
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "97vh",
      }}
      {...handlers}
    >
      {currPage === 1 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            overflow: "hidden",
          }}
        >
          <Image src={Logo} width={150} height={150} />
          <Typography>어플을 클릭해주세요</Typography>
          <Button
            sx={{ marginTop: "2rem" }}
            startIcon={<HelpOutlineIcon />}
            onClick={handleOpenModal}
          >
            <Typography>어플이 뭔지 잘 모르겠어요</Typography>
          </Button>
          <HelpPopup handleClose={handleCloseModal} open={openModal} />
          <Button
            onClick={handleNext}
            sx={{ position: "absolute", bottom: "1rem", right: "1rem" }}
          >
            <ArrowCircleRightOutlinedIcon />
          </Button>
        </Box>
      )}
      {currPage === 2 && <TalkPage1 handleNext={handleNext} />}
      {currPage === 3 && <TalkPage2 handleNext={handleNext} />}
      {currPage === 4 && <TalkPage3 handleNext={handleNext} />}
    </Box>
  );
}
