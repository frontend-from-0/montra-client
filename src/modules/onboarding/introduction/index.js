import React from "react";
import SignUpButton from "../../../shared-components/SignUpButton";
import LoginButton from "../../../shared-components/LoginButton";
import { Stack } from "@mui/material";
import "./introduction.css";
import Slider from "./Slider";

export const Introduction = () => {
  // TODO: Make Paper div a shared component once needed somewhere else
  return (
    <div className="paper">
      <Slider />
      <Stack spacing={2} direction="column">
        <SignUpButton />
        <LoginButton />
      </Stack>
    </div>
  );
};
