import { Box, Typography } from "@mui/material";

interface IHeader {
  todoCount: number;
}

export const Header: React.FC<IHeader> = ({ todoCount }) => (
  <Box>
    <Typography
      sx={{ fontSize: 35, fontWeight: "bold" }}
      variant="h1"
      component="h1"
      gutterBottom
      className="header__title"
    >
      Todo list {todoCount}
    </Typography>
  </Box>
);
