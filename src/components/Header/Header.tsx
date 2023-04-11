import { Box, Typography } from "@mui/material";

export const Header = () => (
  <Box>
    <Typography sx={{ fontSize: 35 }} variant="h1" component="h1" gutterBottom>
      Todo list
    </Typography>
  </Box>
);
