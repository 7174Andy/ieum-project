"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useSwipeable } from "react-swipeable";

import Logo from "../../../public/images/kakao-app-logo.png";

import HelpPopup from "../../../components/help-popup";
import TalkPage1 from "../../../components/kakao-talk-component/kakao-talk-step1";
import TransferPage2 from "../../../components/kakao-transfer-component/kakao-transfer-step2";
import TransferPage3 from "../../../components/kakao-transfer-component/kakao-transfer-step3";
import TransferPage4 from "../../../components/kakao-transfer-component/kakao-transfer-step4";
import TransferPage5 from "../../../components/kakao-transfer-component/kakao-transfer-step5";
import TransferPage6 from "../../../components/kakao-transfer-component/kakao-transfer-step6";
import CompletePopup from "../../../components/complete-popup";
import { useRouter } from "next/navigation";

const pageNum = 7;

export default function Transfer() {
  const [currPage, setCurrPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    if (currPage < pageNum) {
      setCurrPage(currPage + 1);
    } else if (currPage === pageNum && !completeModal) {
      setCompleteModal(true);
    }
  };

  const handlePrev = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    } else if (currPage === 1) {
      router.push("/financial");
    }
  };

  const handleAgain = () => {
    setCompleteModal(false);
    setCurrPage(1);
  };

  const handleCloseComplete = () => {
    setCompleteModal(false);
    setCurrPage(pageNum);
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
    <>
      {currPage === 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "97vh",
          }}
          {...handlers}
        >
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
              <ArrowCircleRightOutlinedIcon
                sx={{ width: "3rem", height: "3rem" }}
              />
            </Button>
          </Box>
        </Box>
      )}
      {currPage === 2 && (
        <TalkPage1 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 3 && (
        <TransferPage2 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 4 && (
        <TransferPage3 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 5 && (
        <TransferPage4 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 6 && (
        <TransferPage5 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 7 && (
        <TransferPage6 handleNext={handleNext} handlers={handlers} />
      )}
      <CompletePopup
        handleClose={handleCloseComplete}
        open={completeModal}
        handleAgain={handleAgain}
        router={router}
        url={"/financial"}
      />
    </>
  );
}
