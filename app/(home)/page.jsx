"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import SearchBar from "../../components/search-bar";

import Image from "next/image";
import Logo from "../../public/images/main-character.png";
import LogoText from "../../public/images/logo.png";
import Ribbon from "../../public/images/ribbon.png";

export default function Home() {
  const [search, setSearch] = useState(false);
  const [use, setUse] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: "2rem",
        py: "2rem",
        gap: "1.5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Image src={LogoText} width={180} height={90} />
        <Image src={Logo} width={300} height={300} />
        <Image src={Ribbon} width={300} height={50} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "100%",
        }}
      >
        {search ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <SearchBar />
            <Button onClick={() => setSearch(false)}>뒤로</Button>
          </Box>
        ) : use ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            Search
          </Box>
        ) : (
          <>
            <Button
              variant="contained"
              color="primary"
              sx={{
                px: "2rem",
                py: "1rem",
                borderRadius: "1rem",
              }}
              onClick={() => setSearch(true)}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                }}
              >
                바로 사용하기
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                px: "2rem",
                py: "1rem",
                borderRadius: "1rem",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                }}
              >
                사용 방법 배우기
              </Typography>
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
