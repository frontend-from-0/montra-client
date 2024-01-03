import React from "react";
import SignUpButton from "../../../shared-components/SignUpButton";
import LoginButton from "../../../shared-components/LoginButton";
import { Stack } from "@mui/material";
import "./introduction.css";
import Slider from "./Slider";

export const Introduction = () => {
  return (
    <div>
      <div className="introduction">
        <Slider />
      </div>
      <Stack spacing={2} direction="column">
        <SignUpButton />
        <LoginButton />
      </Stack>
    </div>
  );
};
