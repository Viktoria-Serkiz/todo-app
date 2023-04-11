import { Paper, Box, Typography, IconButton } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

type Todo = {
  id: number;
  name: string;
  checked: boolean;
  description: string;
};

interface ITodoItem {
  todo: Todo;
}

export const TodoItem: React.FC<ITodoItem> = ({ todo }) => (
  <Paper
    elevation={2}
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 2,
      marginTop: "15px",
      padding: "25px 28px",
      borderRadius: 2,
    }}
  >
    <Box textAlign="left">
      <Typography
        sx={{
          cursor: "pointer",
          textDecorationLine: todo.checked ? "line-through" : "none",
        }}
        variant="h5"
        component="h5"
        gutterBottom
      >
        {todo.name}
      </Typography>
      <Typography variant="subtitle1" component="div" gutterBottom>
        {todo.description}
      </Typography>
    </Box>

    <Box>
      <IconButton color="error" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Box>
  </Paper>
);
