import React from "react";
import SignUpButton from "../../../shared-components/SignUpButton";
import LoginButton from "../../../shared-components/LoginButton";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import handHoldingMoney from "../../../assets/illustrations/handHoldingMoney.svg";
import "./introduction.css";

export const Introduction = () => {
  return (
    <div>
      <div className="introduction">
        <img src={handHoldingMoney} alt="handHoldingMoney" className="img" />
        <Typography variant="h4">Gain total control of your money</Typography>
        <p>Become your own money manager and make every cent count</p>
        <p>indicators</p>
      </div>
      <Stack spacing={2} direction="column">
        <SignUpButton />
        <LoginButton />
      </Stack>
    </div>
  );
};
