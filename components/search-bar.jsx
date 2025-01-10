"use client";

import React from "react";
import {
  Box,
  Button,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const options = [
  "카카오톡",
  "안드로이드",
  "은행 업무",
  "플레이 스토어",
  "카카오 택시",
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
        case "플레이 스토어":
          router.push("/playstore");
          break;
        case "카카오 택시":
          router.push("/kakaotaxi");
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
