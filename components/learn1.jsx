"use client";

import React, { useContext } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  styled,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ThemeContext } from "./ThemeContext";
import { useTheme } from "@mui/material/styles";

const SizeButton = styled(Button)({
  backgroundColor: "#529DAD",
  padding: "0.4rem 0.35rem",
  color: "white",
  "&:active": {
    backgroundColor: "#529DAD",
  },
});

export default function Learn1({ currentPage, setCurrentPage, setCurrTitle }) {
  const { fontSize, setFontSize } = useContext(ThemeContext);
  const theme = useTheme();

  const handleChange = (event) => {
    setFontSize(Number(event.target.value));
  };

  const handleNext = () => {
    setCurrTitle("이음 사용 방법");
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
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
      <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Typography variant="body1" sx={{ color: "gray" }}>
          손가락으로 넘기거나 화살표를 누르면 다음 화면으로 넘어갑니다.
        </Typography>
        <ArrowForwardIcon onClick={handleNext} />
      </Box>
    </>
  );
}
