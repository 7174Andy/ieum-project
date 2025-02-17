"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

import Logo from "../../../public/images/main-character.png";

export default function Kakao() {
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
          height: "100%",
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
          <Image src={Logo} width={80} height={80} />
          <Typography variant="h1" sx={{ fontWeight: 500 }}>
            카카오톡
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
            아래 버튼을 통해 카카오톡의 주요 기능을 배우고, 사용 방법을
            익혀보세요.
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
                onClick={() => router.push("/kakao-talk")}
              >
                보이스톡/페이스톡
              </Typography>
            </Button>
            <Button variant="contained" sx={{ flex: 1 }}>
              <Typography
                sx={{ color: "white" }}
                onClick={() => router.push("/kakao-picture")}
              >
                사진 보내기
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
                onClick={() => router.push("/kakao-friend")}
              >
                친구 추가
              </Typography>
            </Button>
            <Button variant="contained" sx={{ flex: 1 }}>
              <Typography
                sx={{ color: "white" }}
                onClick={() => router.push("/kakao-present")}
              >
                카카오 선물하기
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
                onClick={() => router.push("/kakao-voice")}
              >
                음성 메세지 보내기
              </Typography>
            </Button>
            <Button
              variant="contained"
              sx={{ flex: 1 }}
              onClick={() => router.push("/kakao-save")}
            >
              <Typography sx={{ color: "white" }}>
                사진/영상 저장하기
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
              onClick={() => router.push("/kakao-map")}
            >
              <Typography sx={{ color: "white" }}>위치 공유하기</Typography>
            </Button>
          </Box>
          <Button onClick={() => router.push("/")}>
            <Typography>뒤로가기</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}
