"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Character from "../../../public/images/character-how-to.png";
import { theme } from "../../../theme";
import Learn1 from "../../../components/learn1";

export default function LearnPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      router.push("/");
    }
  };

  return (
    <>
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
        {currentPage === 1 && (
          <Learn1 currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
      </Box>
      <Button sx={{ color: "white" }} variant="contained" onClick={handleBack}>
        뒤로가기
      </Button>
    </>
  );
}
