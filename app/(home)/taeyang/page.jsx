"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useSwipeable } from "react-swipeable";

import Logo from "../../../public/images/taeyang-logo.png";

import HelpPopup from "../../../components/help-popup";
import TaeyangPage1 from "../../../components/taeyang-component/taeyang-step1";
import TaeyangPage2 from "../../../components/taeyang-component/taeyang-step2";
import TaeyangPage3 from "../../../components/taeyang-component/taeyang-step3";
import TaeyangPage4 from "../../../components/taeyang-component/taeyang-step4";
import TaeyangPage5 from "../../../components/taeyang-component/taeyang-step5";
import TaeyangPage6 from "../../../components/taeyang-component/taeyang-step6";
import TaeyangPage7 from "../../../components/taeyang-component/taeyang-step7";
import TaeyangPage8 from "../../../components/taeyang-component/taeyang-step8";
import TaeyangPage9 from "../../../components/taeyang-component/taeyang-step9";
import CompletePopup from "../../../components/complete-popup";
import { useRouter } from "next/navigation";

const pageNum = 10;

export default function DoctorNow() {
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
      router.push("/health");
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
        <TaeyangPage1 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 3 && (
        <TaeyangPage2 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 4 && (
        <TaeyangPage3 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 5 && (
        <TaeyangPage4 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 6 && (
        <TaeyangPage5 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 7 && (
        <TaeyangPage6 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 8 && (
        <TaeyangPage7 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 9 && (
        <TaeyangPage8 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 10 && (
        <TaeyangPage9 handleNext={handleNext} handlers={handlers} />
      )}
      <CompletePopup
        handleClose={handleCloseComplete}
        open={completeModal}
        handleAgain={handleAgain}
        router={router}
        url={"/health"}
      />
    </>
  );
}
