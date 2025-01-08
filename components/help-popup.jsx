"use client";

import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../public/images/logo.png";

export default function HelpPopup({ handleClose, open }) {
  const theme = useTheme();

  console.log(theme.typography);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      container={() => document.body}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 200,
          backgroundColor: theme.palette.border.background,
          boxShadow: 24,
          p: 4,
          borderRadius: "2rem",
        }}
      >
        <Button
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "#4f93a3",
          }}
        >
          <CloseIcon />
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Image src={Logo} width={70} height={35} alt="Logo" />
        </Box>
        <Typography
          id="modal-modal-title"
          variant="h3"
          component="h2"
          sx={{
            textAlign: "center",
          }}
        >
          어플이란?
        </Typography>
        <Typography
          id="modal-modal-description"
          variant="body1"
          sx={{ mt: 2, color: "#333", textAlign: "center" }}
        >
          어플은 휴대폰 안에 있는 작은 프로그램으로, 메시지를 보내거나, 날씨를
          확인하거나, 게임을 하는 등 특정한 일을 도와주는 도구예요.
        </Typography>
        <Typography
          sx={{ mt: 2, color: "#333", textAlign: "center" }}
          variant="body1"
        >
          어플을 사용하려면 화면에 있는 그림(아이콘)을 손가락으로 눌러주기만
          하면 돼요!
        </Typography>
      </Box>
    </Modal>
  );
}
