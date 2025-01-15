"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useSwipeable } from "react-swipeable";

import Logo from "../../../public/images/ddoc-doc-logo.png";

import HelpPopup from "../../../components/help-popup";
import DdocDocPage1 from "../../../components/ddoc-doc-component/ddoc-doc-step1";
import DdocDocPage2 from "../../../components/ddoc-doc-component/ddoc-doc-step2";
import DdocDocPage3 from "../../../components/ddoc-doc-component/ddoc-doc-step3";
import DdocDocPage4 from "../../../components/ddoc-doc-component/ddoc-doc-step4";
import DdocDocPage5 from "../../../components/ddoc-doc-component/ddoc-doc-step5";
import DdocDocPage6 from "../../../components/ddoc-doc-component/ddoc-doc-step6";
import DdocDocPage7 from "../../../components/ddoc-doc-component/ddoc-doc-step7";
import DdocDocPage8 from "../../../components/ddoc-doc-component/ddoc-doc-step8";
import DdocDocPage9 from "../../../components/ddoc-doc-component/ddoc-doc-step9";
import DdocDocPage10 from "../../../components/ddoc-doc-component/ddoc-doc-step10";
import CompletePopup from "../../../components/complete-popup";
import { useRouter } from "next/navigation";

const pageNum = 11;

export default function DdocDoc() {
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
        <DdocDocPage1 handlers={handlers} handleNext={handleNext} />
      )}
      {currPage === 3 && (
        <DdocDocPage2 handlers={handlers} handleNext={handleNext} />
      )}
      {currPage === 4 && (
        <DdocDocPage3 handlers={handlers} handleNext={handleNext} />
      )}
      {currPage === 5 && (
        <DdocDocPage4 handlers={handlers} handleNext={handleNext} />
      )}
      {currPage === 6 && (
        <DdocDocPage5 handlers={handlers} handleNext={handleNext} />
      )}
      {currPage === 7 && (
        <DdocDocPage6 handlers={handlers} handleNext={handleNext} />
      )}
      {currPage === 8 && (
        <DdocDocPage7 handlers={handlers} handleNext={handleNext} />
      )}
      {currPage === 9 && (
        <DdocDocPage8 handlers={handlers} handleNext={handleNext} />
      )}
      {currPage === 10 && (
        <DdocDocPage9 handlers={handlers} handleNext={handleNext} />
      )}
      {currPage === 11 && (
        <DdocDocPage10 handlers={handlers} handleNext={handleNext} />
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
