"use client";

import React, { useState } from "react";
import {
  Box,
  Select,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  styled,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Character from "../../../public/images/character-how-to.png";
import { theme } from "../../../theme";

const SizeButton = styled(Button)({
  backgroundColor: "#529DAD",
  padding: "0.4rem 0.35rem",
  color: "white",
  "&:active": {
    backgroundColor: "#529DAD",
  },
});

export default function LearnPage() {
  const [fontSize, setFontSize] = useState(24);
  const router = useRouter();

  const handleChange = (event) => {
    setFontSize(event.target.value);
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
              width: "85%",
              py: "1rem",
              px: "0.8rem",
            }}
          >
            <Typography sx={{ fontSize: `${fontSize}px` }}>
              안녕하세요. 이음입니다.
            </Typography>
          </Box>
          <FormControl fullWidth>
            <InputLabel id="font-size-label">글자 크기</InputLabel>
            <Select
              labelId="font-size-label"
              id="font-size"
              sx={{
                width: "100%",
                border: `0.5px solid ${theme.palette.border.main}`,
              }}
              value={fontSize}
              onChange={handleChange}
              label="글자 크기"
            >
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={22}>22</MenuItem>
              <MenuItem value={28}>28</MenuItem>
              <MenuItem value={34}>34</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={46}>46</MenuItem>
              <MenuItem value={52}>52</MenuItem>
              <MenuItem value={58}>58</MenuItem>
              <MenuItem value={64}>64</MenuItem>
            </Select>
          </FormControl>
          <Typography>버튼을 눌러서 글자 크기를 조절해 보세요</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              width: "100%",
            }}
          >
            <SizeButton
              variant="contained"
              onClick={() => {
                setFontSize(16);
              }}
            >
              작은 글자
            </SizeButton>
            <SizeButton
              variant="contained"
              onClick={() => {
                setFontSize(34);
              }}
            >
              중간 글자
            </SizeButton>
            <SizeButton
              variant="contained"
              onClick={() => {
                setFontSize(64);
              }}
            >
              큰 글자
            </SizeButton>
          </Box>
        </Box>
      </Box>
      <Button
        sx={{ color: "white" }}
        variant="contained"
        onClick={() => router.push("/")}
      >
        뒤로가기
      </Button>
    </>
  );
}
