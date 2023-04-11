import { useState } from "react";
import { TextField, Paper, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

import { Todo } from "../../App";

const DEFAULT_TODO = { name: "", description: "" };

interface IPanel {
  onAddTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}
export const Panel: React.FC<IPanel> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState(DEFAULT_TODO);

  const onClick = () => {
    onAddTodo(todo);
    setTodo(DEFAULT_TODO);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 30px",
        borderRadius: 2,
        gap: 2,
      }}
    >
      <TextField
        value={todo.name}
        onChange={onChange}
        id="outlined-basic"
        name="name"
        label="name"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={todo.description}
        onChange={onChange}
        id="outlined-basic"
        name="description"
        label="description"
        variant="outlined"
        fullWidth
      />
      <Button variant="outlined" onClick={onClick} startIcon={<Add />}>
        Add
      </Button>
    </Paper>
  );
};
