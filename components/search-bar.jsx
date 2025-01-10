"use client";

import React from "react";
import {
  Box,
  Button,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";

const options = [
  "건강관리",
  "교통",
  "아이폰",
  "안드로이드",
  "은행 업무",
  "카카오톡",
];

export default function SearchBar({ search, setSearch, router }) {
  const handleSearch = () => {
    console.log(search);
    if (search) {
      switch (search) {
        case "카카오톡":
          router.push("/kakao");
          break;
        case "안드로이드":
          router.push("/android");
          break;
        case "은행 업무":
          router.push("/financial");
          break;
        case "건강관리":
          router.push("/health");
          break;
        case "교통":
          router.push("/transportation");
          break;
        case "아이폰":
          router.push("/iphone");
          break;
        default:
          break;
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      <Autocomplete
        renderInput={(params) => (
          <TextField {...params} label="궁금하신 어플을 검색해 주세요" />
        )}
        variant="outlined"
        disablePortal
        options={options}
        onChange={(event, value) => setSearch(value)}
        sx={{
          borderRadius: "1rem",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "1rem",
        }}
        onClick={handleSearch}
      >
        <Typography sx={{ color: "white" }}>검색</Typography>
      </Button>
    </Box>
  );
}
