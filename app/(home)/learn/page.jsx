"use client";

import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import Image from "next/image";
import Character from "../../../public/images/character-how-to.png";
import { theme } from "../../../theme";

export default function LearnPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        border: `1px solid ${theme.palette.border.main}`,
        borderRadius: "1rem",
        p: "1rem",
        backgroundColor: `${theme.palette.border.background}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Image src={Character.src} alt="Character" width={100} height={100} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            textAlign: "right",
            gap: "0.5rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            글자 크기 조정
          </Typography>
          <Typography
            sx={{
              fontSize: "0.8rem",
              color: "gray",
            }}
          >
            먼저 하단의 조절버튼을 활용해 글자크기를 조정해주세요
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          border: `0.5px solid ${theme.palette.border.main}`,
          background: "white",
          borderRadius: "1rem",
          width: "85%",
          py: "1rem",
          px: "0.8rem",
        }}
      >
        <Typography>실제 보여지는 크기 입니다</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
            background: `${theme.palette.border.backgroundDark}`,
            background: "white",
            borderRadius: "1rem",
            width: "85%",
            py: "1rem",
            px: "0.8rem",
          }}
        >
          <Typography>안녕하세요. 이음입니다. </Typography>
        </Box>
      </Box>
    </Box>
  );
}
