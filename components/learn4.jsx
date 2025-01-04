import { Box, Typography, Button, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { theme } from "../theme";

export default function Learn4({
  currentPage,
  setCurrentPage,
  setCurrTitle,
  handleNext,
}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "100%",
          border: `0.5px solid ${theme.palette.border.main}`,
          background: "white",
          borderRadius: "1rem",
          width: "85%",
          py: "1rem",
          px: "0.8rem",
          paddingBottom: "5rem",
        }}
      >
        <Typography sx={{ color: "#FF0000" }}>방법 03.</Typography>
        <Typography sx={{ fontWeight: "bold" }}>화살표 누르기</Typography>
        <Typography>안내중, 다음 단계로 넘어가고 싶으신가요?</Typography>
        <Typography>1. 우측 상단에 있는 화살표를 눌러주시거나</Typography>
        <Typography>2. 손가락으로 화면을 넘겨주세요.</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Typography>
          손가락으로 넘기거나 화살표를 누르면 다음 화면으로 넘어갑니다.
        </Typography>
        <ArrowForwardIcon onClick={handleNext} />
      </Box>
    </>
  );
}
