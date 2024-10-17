"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Logo from "../../public/images/main-character.png";
import LogoText from "../../public/images/logo.png";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: "2rem",
        py: "3rem",
        gap: "1.5rem",
      }}
    >
      <Image src={LogoText} width={180} height={90} />
      <Image src={Logo} width={300} height={300} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            px: "2rem",
            py: "1rem",
            borderRadius: "1rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
            }}
          >
            바로 사용하기
          </Typography>
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            px: "2rem",
            py: "1rem",
            borderRadius: "1rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
            }}
          >
            사용 방법 배우기
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
