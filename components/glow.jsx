import { keyframes } from "@emotion/react";

export const glow = keyframes`
0% {
  box-shadow: 0 0 5px rgba(255, 223, 0, 0.5);
  background-color: rgba(255, 223, 0, 0.3);
}
50% {
  box-shadow: 0 0 15px rgba(255, 223, 0, 1);
  background-color: rgba(255, 223, 0, 0.8);
}
100% {
  box-shadow: 0 0 5px rgba(255, 223, 0, 0.5);
  background-color: rgba(255, 223, 0, 0.3);
}
`;
