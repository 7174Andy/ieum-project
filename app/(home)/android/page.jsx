"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

import Logo from "../../../public/images/main-character.png";

export default function Android() {
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
            안드로이드 기본
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
            아래 버튼을 통해 안드로이드의 기본 앱 사용 방법을 익혀보세요.
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
                onClick={() => router.push("/android-alarm")}
              >
                알람
              </Typography>
            </Button>
            <Button variant="contained" sx={{ flex: 1 }}>
              <Typography
                sx={{ color: "white" }}
                onClick={() => router.push("/android-timer")}
              >
                타이머
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
                onClick={() => router.push("/android-playstore")}
              >
                어플 설치
              </Typography>
            </Button>
            <Button variant="contained" sx={{ flex: 1 }}>
              <Typography
                sx={{ color: "white" }}
                onClick={() => router.push("/android-calendar")}
              >
                캘린더
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
                onClick={() => router.push("/android-memo")}
              >
                메모장
              </Typography>
            </Button>
            <Button variant="contained" sx={{ flex: 1 }}>
              <Typography
                sx={{ color: "white" }}
                onClick={() => router.push("/android-message")}
              >
                메세지
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <Button
              variant="contained"
              onClick={() => router.push("/android-photo")}
            >
              <Typography sx={{ color: "white" }}>사진 보내기</Typography>
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
