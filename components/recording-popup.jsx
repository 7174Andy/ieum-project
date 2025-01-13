"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  Button,
  Typography,
  Box,
  styled,
  LinearProgress,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RepeatIcon from "@mui/icons-material/Repeat";
import { useTheme } from "@mui/material/styles";
import StopIcon from "@mui/icons-material/Stop";
import PauseIcon from "@mui/icons-material/Pause";

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const PlaySpeedButton = styled(Button)({
  backgroundColor: "#529DAD",
  padding: "0.4rem 0.35rem",
  color: "white",
  "&:active": {
    backgroundColor: "#529DAD",
  },
});

export default function RecordingPopup({ text, handleClose, open }) {
  const [rate, setRate] = useState(1);
  const [voices, setVoices] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState("00:00");
  const [totalTime, setTotalTime] = useState("00:00");
  const currentTimeRef = useRef(0);

  const intervalRef = useRef(null);

  const theme = useTheme();

  // Load voices when the component mounts
  useEffect(() => {
    const loadVoices = () => {
      const synth = window.speechSynthesis;

      const updateVoices = () => {
        const availableVoices = synth.getVoices();
        setVoices(availableVoices);
      };

      // If voices are already loaded, use them
      if (synth.getVoices().length > 0) {
        updateVoices();
      }

      // Listen for the voiceschanged event
      synth.addEventListener("voiceschanged", updateVoices);

      // Cleanup event listener on unmount
      return () => {
        synth.removeEventListener("voiceschanged", updateVoices);
      };
    };

    loadVoices();
  }, []);

  // Pause the progress bar when paused
  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalRef.current);
    } else if (isPlaying) {
      const estimatedDuration = text.split(" ").length / (rate * 1.5);
      startProgressTracking(estimatedDuration);
    }
  }, [isPaused]);

  // PLAY
  const playTTS = () => {
    setIsPlaying(true);
    setIsPaused(false);
    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    if (!window.speechSynthesis) {
      alert("브라우저가 TTS를 지원하지 않습니다.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    // Find the Korean voice with Google TTS
    const koreanVoice = voices.find((voice) => voice.name === "Google 한국의");

    if (koreanVoice) {
      utterance.voice = koreanVoice;
    } else {
      console.warn("Korean voice not found. Using default voice.");
    }

    // Event fired when the TTS finishes reading
    utterance.onend = () => {
      setIsPlaying(false); // Update state to indicate playback is done
      setIsPaused(false);
      clearInterval(intervalRef.current);
      setProgress(0);
      setElapsedTime("00:00");
    };

    utterance.onstart = () => {
      currentTimeRef.current = 0;
      const estimatedDuration = text.split(" ").length / (rate * 1.5); // Estimate duration
      startProgressTracking(estimatedDuration);
    };

    utterance.lang = "ko-KR";
    utterance.rate = rate; // Adjust the rate as needed
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  };

  // STOP
  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    clearInterval(intervalRef.current);
    currentTimeRef.current = 0;
    setProgress(0);
    setElapsedTime("00:00");
  };

  // PAUSE
  const pauseTTS = () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  // RESUME
  const resumeTTS = () => {
    window.speechSynthesis.resume();
    setIsPaused(false);
    const estimatedDuration = text.split(" ").length / (rate * 1.5); // Recalculate duration
    startProgressTracking(estimatedDuration - currentTimeRef.current); // Resume tracking
  };

  // REPEAT
  const repeatTTS = () => {
    window.speechSynthesis.cancel();
    currentTimeRef.current = 0;
    setProgress(0);
    setElapsedTime("00:00");
    playTTS();
    startProgressTracking(text.split(" ").length / (rate * 1.5));
  };

  // Format the time in MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  const startProgressTracking = (duration) => {
    setTotalTime(formatTime(duration));

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        if (currentTimeRef.current < duration) {
          currentTimeRef.current += 0.1;
          setElapsedTime(formatTime(currentTimeRef.current));
          setProgress((currentTimeRef.current / duration) * 100);
        } else {
          clearInterval(intervalRef.current); // Stop interval when duration is reached
          currentTimeRef.current = 0;
        }
      }
    }, 100);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          backgroundColor: theme.palette.border.background,
          borderRadius: "2rem",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h2" align="center">
          음성 안내
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }} variant="body1">
          {text}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              color: "white",
              background: "#529DAD",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              borderRadius: "0",
              width: "6rem",
            }}
            onClick={repeatTTS}
            variant="contained"
          >
            <RepeatIcon />
            다시듣기
          </Button>
          {!isPlaying && !isPaused && (
            <Button
              sx={{
                color: "white",
                background: "#529DAD",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                borderRadius: "0",
                width: "6rem",
              }}
              onClick={playTTS}
              variant="contained"
            >
              <PlayArrowIcon />
              재생
            </Button>
          )}
          {isPaused && (
            <Button
              sx={{
                color: "white",
                background: "#529DAD",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                borderRadius: "0",
                width: "6rem",
              }}
              onClick={resumeTTS}
              variant="contained"
            >
              <PlayArrowIcon />
              재생
            </Button>
          )}
          {isPlaying && !isPaused && (
            <Button
              sx={{
                color: "white",
                background: "#529DAD",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                borderRadius: "0",
                width: "6rem",
              }}
              onClick={pauseTTS}
              variant="contained"
            >
              <PauseIcon />
              일시정지
            </Button>
          )}
          <Button
            sx={{
              color: "white",
              background: "#529DAD",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              borderRadius: "0",
              width: "6rem",
            }}
            onClick={handleStop}
            variant="contained"
          >
            <StopIcon />
            정지
          </Button>
        </Box>
        <Box sx={{ mt: 2 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: "0.25rem",
              borderRadius: "0.25rem",
              backgroundColor: `${theme.palette.blue.secondary.main}`,
              "& .MuiLinearProgress-bar": {
                backgroundColor: `${theme.palette.blue.primary.main}`,
              },
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <TinyText>{elapsedTime}</TinyText>
            <TinyText>{totalTime}</TinyText>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            mt: 2,
          }}
        >
          <PlaySpeedButton>0.5X</PlaySpeedButton>
          <PlaySpeedButton>1X</PlaySpeedButton>
        </Box>
      </Box>
    </Modal>
  );
}
