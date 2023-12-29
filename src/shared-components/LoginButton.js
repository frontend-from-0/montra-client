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
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
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
