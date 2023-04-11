import { useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";

import { Todo } from "../../../App";

interface IEditTodoItem {
  todo: Todo;
  onChangeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

export const EditTodoItem: React.FC<IEditTodoItem> = ({ todo, onChangeTodo }) => {
  const [editTodo, setEditTodo] = useState({
    name: todo.name,
    description: todo.description,
  });

  const onClick = () => {
    onChangeTodo(editTodo);

  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setEditTodo({ ...todo, [name]: value });
  }; 

  return (
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
      <TextField
        value={editTodo.name}
        onChange={onChange}
        id="outlined-basic"
        name="name"
        label="name"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={editTodo.description}
        onChange={onChange}
        id="outlined-basic"
        name="description"
        label="description"
        variant="outlined"
        fullWidth
      />

      <Button variant="outlined" onClick={onClick} startIcon={<EditIcon />}>
        Edit
      </Button>
    </Paper>
  );
};
