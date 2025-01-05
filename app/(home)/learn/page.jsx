"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSwipeable } from "react-swipeable";
import { useTheme } from "@mui/material/styles";

import Character from "../../../public/images/character-how-to.png";
import Learn1 from "../../../components/learn1";
import Learn2 from "../../../components/learn2";
import Learn3 from "../../../components/learn3";
import Learn4 from "../../../components/learn4";

export default function LearnPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [currTitle, setCurrTitle] = useState("글자 크기 조정");
  const theme = useTheme();

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      router.push("/");
    }
    if (currentPage - 1 === 1) {
      setCurrTitle("글자 크기 조정");
    } else {
      setCurrTitle("이음 사용 방법");
    }
  };

  const handleNext = () => {
    setCurrTitle("이음 사용 방법");
    setCurrentPage(currentPage + 1);
    if (currentPage === 4) {
      router.push("/");
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
    trackTouch: true,
    preventScrollOnSwipe: true,
  });

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
        {...handlers}
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
              variant="h3"
              sx={{
                fontWeight: 500,
              }}
            >
              {currTitle}
            </Typography>
            {currentPage === 1 && (
              <Typography
                variant="body1"
                sx={{
                  color: "gray",
                }}
              >
                먼저 하단의 조절버튼을 활용해 글자크기를 조정해주세요
              </Typography>
            )}
          </Box>
        </Box>
        {currentPage === 1 && (
          <Learn1
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setCurrTitle={setCurrTitle}
            handleNext={handleNext}
          />
        )}
        {currentPage === 2 && <Learn2 handleNext={handleNext} />}
        {currentPage === 3 && <Learn3 handleNext={handleNext} />}
        {currentPage >= 4 && <Learn4 handleNext={handleNext} />}
      </Box>
      <Button sx={{ color: "white" }} variant="contained" onClick={handleBack}>
        뒤로가기
      </Button>
    </>
  );
}
