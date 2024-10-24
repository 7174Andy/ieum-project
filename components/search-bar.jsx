import React from "react";
import { Box, TextField, Button } from "@mui/material";

export default function SearchBar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      <TextField
        label="궁금하신 어플을 검색해 주세요"
        variant="outlined"
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
      >
        검색
      </Button>
    </Box>
  );
}
