"use client";

import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../public/images/logo.png";
import Character from "../public/images/error-character.png";

export default function MissClickPopup({ handleClose, open }) {
  const theme = useTheme();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 250,
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
          잘못 입력하셨습니다.
        </Typography>
        <Typography
          id="modal-modal-description"
          variant="body1"
          sx={{ mt: 2, color: "#333", textAlign: "center" }}
        >
          다시 한번 입력해주세요.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Image src={Character} width={100} height={100} alt="Character" />
        </Box>
      </Box>
    </Modal>
  );
}
