"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import { useSwipeable } from "react-swipeable";

import Logo from "../../../public/images/kakao-app-logo.png";

import HelpPopup from "../../../components/help-popup";
import TalkPage1 from "../../../components/kakao-talk-component/kakao-talk-step1";
import PicturePage2 from "../../../components/kakao-picture-component/kakao-picture-step2";
import PicturePage3 from "../../../components/kakao-picture-component/kakao-picture-step3";
import PicturePage4 from "../../../components/kakao-picture-component/kakao-picture-step4";
import CompletePopup from "../../../components/complete-popup";
import RecordingPopup from "../../../components/recording-popup";
import { useRouter } from "next/navigation";

const pageNum = 5;
const TTS_TEXT =
  "카카오톡으로 사진을 전송하는 방법을 배워보겠습니다. 화면에 보이는 어플을 찾아 실행해주세요.";

export default function Picture() {
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
      router.push("/kakao");
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
              sx={{ position: "absolute", top: "1rem", right: "1rem" }}
            >
              <HeadphonesRoundedIcon sx={{ width: "3rem", height: "3rem" }} />
            </Button>
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
        <PicturePage2 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 4 && (
        <PicturePage3 handleNext={handleNext} handlers={handlers} />
      )}
      {currPage === 5 && (
        <PicturePage4 handleNext={handleNext} handlers={handlers} />
      )}
      <RecordingPopup
        text={TTS_TEXT}
        open={openSound}
        handleClose={() => setOpenSound(false)}
      />
      <CompletePopup
        handleClose={handleCloseComplete}
        open={completeModal}
        handleAgain={handleAgain}
        router={router}
        url={"/kakao"}
      />
    </>
  );
}
