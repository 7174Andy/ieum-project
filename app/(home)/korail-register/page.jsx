"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useSwipeable } from "react-swipeable";

import Logo from "../../../public/images/korail-logo.png";

import HelpPopup from "../../../components/help-popup";
import KorailRegisterPage1 from "../../../components/korail-register-component/korail-register-step1";
import KorailRegisterPage2 from "../../../components/korail-register-component/korail-register-step2";
import KorailRegisterPage3 from "../../../components/korail-register-component/korail-register-step3";
import KorailRegisterPage4 from "../../../components/korail-register-component/korail-register-step4";
import KorailRegisterPage5 from "../../../components/korail-register-component/korail-register-step5";
import KorailRegisterPage6 from "../../../components/korail-register-component/korail-register-step6";
import KorailRegisterPage7 from "../../../components/korail-register-component/korail-register-step7";
import KorailRegisterPage8 from "../../../components/korail-register-component/korail-register-step8";
import KorailRegisterPage9 from "../../../components/korail-register-component/korail-register-step9";
import KorailCompletePopup from "../../../components/korail-complete-popup";
import { useRouter } from "next/navigation";

const pageNum = 10;

export default function KorailRegister() {
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
      router.push("/transportation");
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
        <KorailRegisterPage1 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 3 && (
        <KorailRegisterPage2 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 4 && (
        <KorailRegisterPage3 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 5 && (
        <KorailRegisterPage4 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 6 && (
        <KorailRegisterPage5 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 7 && (
        <KorailRegisterPage6 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 8 && (
        <KorailRegisterPage7 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 9 && (
        <KorailRegisterPage8 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 10 && (
        <KorailRegisterPage9 handleNext={handleNext} handlers={handlers} />
      )}
      <KorailCompletePopup
        handleClose={handleCloseComplete}
        open={completeModal}
        router={router}
        url={"/transportation"}
      />
    </>
  );
}
