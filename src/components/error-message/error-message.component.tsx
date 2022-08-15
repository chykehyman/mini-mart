import { Typography } from "@mui/material";
import { ErrorOutline as ErrorOutlineIcon } from "@mui/icons-material";
import { Box } from "@mui/system";
import { FC } from "react";
import { IErrorMessageComponentProps } from ".";

export const ErrorMessageComponent: FC<IErrorMessageComponentProps> = ({
  message,
}) => (
  <Box
    sx={{
      padding: "19px",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <ErrorOutlineIcon />
    <Typography variant="body1" sx={{ fontWeight: "600" }}>
      {message}
    </Typography>
  </Box>
);

export default ErrorMessageComponent;
