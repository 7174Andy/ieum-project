import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RepeatIcon from "@mui/icons-material/Repeat";

import { theme } from "../theme";

export default function Learn2({ currentPage, setCurrentPage, setCurrTitle }) {
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
        <Typography sx={{ color: "#FF0000" }}>방법 01.</Typography>
        <Typography sx={{ fontWeight: "bold" }}>음성 안내 활용방법</Typography>
        <Typography>
          음성 안내는 좌측에 있는 화살표를 누르면 나옵니다.
        </Typography>
      </Box>
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
          alignItems: "center",
        }}
      >
        <Typography sx={{}}>음성 안내</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              color: "white",
              background: "#529DAD",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              borderRadius: "0",
            }}
            variant="contained"
          >
            <RepeatIcon />
            다시듣기
          </Button>
          <Button
            sx={{
              color: "white",
              background: "#529DAD",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              borderRadius: "0",
            }}
            variant="contained"
          >
            <PlayArrowIcon />
            재생
          </Button>
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
