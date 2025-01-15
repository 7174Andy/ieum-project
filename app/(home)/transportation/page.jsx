"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

import Logo from "../../../public/images/main-character.png";

export default function Apple() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          px: "2rem",
          py: "1rem",
          borderRadius: "1rem",
          maxWidth: "400px",
          border: `1px solid ${theme.palette.border.main}`,
          backgroundColor: theme.palette.border.background,
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Image src={Logo} alt="main-character-logo" width={80} height={80} />
          <Typography variant="h1" sx={{ fontWeight: 500 }}>
            교통 기본
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: "1rem",
          }}
        >
          <Typography>
            아래 버튼을 통해 교통 앱 사용 방법을 익혀보세요.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" sx={{ flex: 1 }}>
              <Typography
                sx={{ color: "white" }}
                onClick={() => {
                  console.log("clicked");
                  router.push("/kakao-taxi");
                }}
              >
                택시 부르기
              </Typography>
            </Button>
            <Button variant="contained" sx={{ flex: 1 }}>
              <Typography
                sx={{ color: "white" }}
                onClick={() => router.push("/korail")}
              >
                기차 예매하기
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" sx={{ flex: 1 }}>
              <Typography
                sx={{ color: "white" }}
                onClick={() => router.push("/korail-register")}
              >
                코레일 회원가입
              </Typography>
            </Button>
            <Button variant="contained" sx={{ flex: 1 }}>
              <Typography
                sx={{ color: "white" }}
                onClick={() => router.push("/korail-login")}
              >
                코레일 로그인
              </Typography>
            </Button>
          </Box>
          <Button onClick={() => router.push("/")} sx={{ flex: 1, mt: "1rem" }}>
            <Typography>뒤로가기</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}
