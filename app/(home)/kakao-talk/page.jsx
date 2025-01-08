"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import Logo from "../../../public/images/kakao-app-logo.png";

import HelpPopup from "../../../components/help-popup";

export default function Talk() {
  const [currPage, setCurrPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);

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
        height: "90vh",
      }}
    >
      {currPage === 1 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
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
        </Box>
      )}
    </Box>
  );
}
