import SignUpButton from "../../../shared-components/SignUpButton";
import LoginButton from "../../../shared-components/LoginButton";
import { Stack } from "@mui/material";

import Slider from "./Slider";
import { Paper } from "../../../shared-components/Paper/Paper";

export const Introduction = () => {
  return (
    <Paper>
      <Slider />
      <Stack spacing={2} direction="column">
        <SignUpButton />
        <LoginButton />
      </Stack>
    </Paper>
  );
};
