import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

import LogoText from "../../../public/images/logo.png";

export default function TransportationLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        px: "1rem",
        py: "2rem",
      }}
    >
      <Image src={LogoText} width={180} height={90} />
      {children}
    </Box>
  );
}
