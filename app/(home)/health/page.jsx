"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

import Logo from "../../../public/images/main-character.png";

export default function Health() {
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
            건강 관리
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
            아래 버튼을 통해 핸드폰으로 건강 관리하는 방법을 익혀보세요.
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
                onClick={() => router.push("/ddoc-doc")}
              >
                똑닥 앱: 병원 예약/접수 어플
              </Typography>
            </Button>
            <Button variant="contained" sx={{ flex: 1 }}>
              <Typography
                sx={{ color: "white" }}
                onClick={() => router.push("/doctor-now")}
              >
                닥터나우: 비대면 진료 어플
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
                onClick={() => router.push("/taeyang")}
              >
                태양이: 약 복용 어플
              </Typography>
            </Button>
            <Button variant="contained" sx={{ flex: 1 }}>
              <Typography
                sx={{ color: "white" }}
                onClick={() => router.push("/e-gen")}
              >
                E-gen: 병원 조회 어플
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
