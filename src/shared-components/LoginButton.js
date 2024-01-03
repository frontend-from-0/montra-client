import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoginButton = () => {
  const ColorButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    width: "343px",
    height: "56px",
    fontSize: "16px",
    padding: "8px",
    border: "1px solid #EEE5FF",
    borderRadius: "16px",
    lineHeight: 1.5,
    backgroundColor: "#EEE5FF",
    color: "#7B61FF",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#7F3DFF",
      borderColor: "#7F3DFF",
      boxShadow: "none",
      color: "#fff",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#7F3DFF",
      borderColor: "#7F3DFF",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #EEE5FF",
    },
  });
  return (
    <div>
      <ColorButton variant="outlined" size="large">
        Login
      </ColorButton>
    </div>
  );
};

export default LoginButton;
