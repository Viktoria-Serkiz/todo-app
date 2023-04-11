import { Paper, Box, Typography, IconButton } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

import { Todo } from "../../../App";

interface ITodoItem {
  todo: Todo;
  onEdit: (id: Todo["id"]) => void;
  onCheckTodo: (id: Todo["id"]) => void;
  onDeleteTodo: (id: Todo["id"]) => void;
}

export const TodoItem: React.FC<ITodoItem> = ({
  todo,
  onEdit,
  onCheckTodo,
  onDeleteTodo,
}) => (
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
      opacity: todo.checked ? 0.5 : 1,
    }}
  >
    <Box textAlign="left">
      <Typography
        onClick={() => onCheckTodo(todo.id)}
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
      <IconButton
        onClick={() => onDeleteTodo(todo.id)}
        color="error"
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        onClick={() => onEdit(todo.id)}
        color="primary"
        aria-label="edit"
      >
        <EditIcon />
      </IconButton>
    </Box>
  </Paper>
);
