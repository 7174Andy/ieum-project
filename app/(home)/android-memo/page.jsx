"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import { useSwipeable } from "react-swipeable";

import Logo from "../../../public/images/android-memo-logo.png";

import HelpPopup from "../../../components/help-popup";
import AndroidMemoPage1 from "../../../components/android-memo-component/android-memo-step1";
import AndroidMemoPage2 from "../../../components/android-memo-component/android-memo-step2";
import AndroidMemoPage3 from "../../../components/android-memo-component/android-memo-step3";
import AndroidMemoPage4 from "../../../components/android-memo-component/android-memo-step4";
import AndroidMemoPage5 from "../../../components/android-memo-component/android-memo-step5";
import AndroidMemoPage6 from "../../../components/android-memo-component/android-memo-step6";
import AndroidMemoPage7 from "../../../components/android-memo-component/android-memo-step7";
import AndroidMemoPage8 from "../../../components/android-memo-component/android-memo-step8";
import CompletePopup from "../../../components/complete-popup";
import RecordingPopup from "../../../components/recording-popup";
import { useRouter } from "next/navigation";

const pageNum = 9;
const TTS_TEXT = "메모 사용 방법을 배워보겠습니다.";

export default function AndroidAlarm() {
  const [currPage, setCurrPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [openSound, setOpenSound] = useState(false);
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
      router.push("/android");
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
            <Image
              src={Logo}
              alt="android-memo-logo"
              width={150}
              height={150}
            />
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
        <AndroidMemoPage1 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 3 && (
        <AndroidMemoPage2 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 4 && (
        <AndroidMemoPage3 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 5 && (
        <AndroidMemoPage4 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 6 && (
        <AndroidMemoPage5 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 7 && (
        <AndroidMemoPage6 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 8 && (
        <AndroidMemoPage7 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 9 && (
        <AndroidMemoPage8 handleNext={handleNext} handlers={handlers} />
      )}
      <CompletePopup
        handleClose={handleCloseComplete}
        open={completeModal}
        handleAgain={handleAgain}
        router={router}
        url={"/android"}
      />
      <RecordingPopup
        text={TTS_TEXT}
        handleClose={() => setOpenSound(false)}
        open={openSound}
      />
    </>
  );
}
