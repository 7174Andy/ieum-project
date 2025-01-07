import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

import LogoText from "../../../public/images/logo.png";

export default function LearnLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        px: "1rem",
        py: "2rem",
      }}
    >
      <Image src={LogoText} width={140} height={70} />
      {children}
    </Box>
  );
}
