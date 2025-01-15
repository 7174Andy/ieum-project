"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useSwipeable } from "react-swipeable";

import Logo from "../../../public/images/korail-logo.png";

import HelpPopup from "../../../components/help-popup";
import CompletePopup from "../../../components/complete-popup";
import RegisterPopup from "../../../components/register-popup";
import KorailPage1 from "../../../components/korail-component/korail-step1";
import KorailPage2 from "../../../components/korail-component/korail-step2";
import KorailPage3 from "../../../components/korail-component/korail-step3";
import KorailPage4 from "../../../components/korail-component/korail-step4";
import KorailPage5 from "../../../components/korail-component/korail-step5";
import KorailPage6 from "../../../components/korail-component/korail-step6";
import KorailPage7 from "../../../components/korail-component/korail-step7";
import KorailPage8 from "../../../components/korail-component/korail-step8";
import KorailPage9 from "../../../components/korail-component/korail-step9";
import KorailPage10 from "../../../components/korail-component/korail-step10";
import { useRouter } from "next/navigation";

const pageNum = 11;

export default function KorailLogin() {
  const [currPage, setCurrPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    if (currPage === 1 && !openRegister) {
      setOpenRegister(true);
    } else if (openRegister) {
      setOpenRegister(false);
      setCurrPage(2);
    } else if (currPage < pageNum) {
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

  const handleCloseRegister = () => {
    setOpenRegister(false);
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
        <KorailPage1 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 3 && (
        <KorailPage2 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 4 && (
        <KorailPage3 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 5 && (
        <KorailPage4 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 6 && (
        <KorailPage5 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 7 && (
        <KorailPage6 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 8 && (
        <KorailPage7 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 9 && (
        <KorailPage8 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 10 && (
        <KorailPage9 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 11 && (
        <KorailPage10 handleNext={handleNext} handlers={handlers} />
      )}
      <RegisterPopup
        handleClose={handleCloseRegister}
        handleNext={handleNext}
        open={openRegister}
        router={router}
        url={"/korail-login"}
      />
      <CompletePopup
        handleClose={handleCloseComplete}
        open={completeModal}
        handleAgain={handleAgain}
        router={router}
        url={"/transportation"}
      />
    </>
  );
}
