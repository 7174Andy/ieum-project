import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

import ScreenShot from "../public/images/font-size-screenshot.png";

export default function Learn3({ handleNext }) {
  const theme = useTheme();

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
        }}
      >
        <Typography sx={{ color: "#FF0000" }}>방법 02.</Typography>
        <Typography sx={{ fontWeight: "bold" }}>글자크기 조정</Typography>
        <Typography>글자 크기는 여기서 조정할 수 있습니다.</Typography>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={ScreenShot} width={250} />
        </Box>
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
