import React, { useState } from "react";

import { Edit as EditIcon } from "@mui/icons-material";
import { Paper, TextField, Button } from "@mui/material";

import { Todo } from "../../../App";

interface EditTodoItemProps {
  todo: Todo;
  onChangeTodo: (todo: Omit<Todo, "checked">) => void;
}

const EditTodoItem: React.FC<EditTodoItemProps> = ({ todo, onChangeTodo }) => {
  const [editTodo, setEditTodo] = useState({
    ...todo,
  });

  const onClick = () => {
    onChangeTodo(editTodo);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setEditTodo({
      ...todo,
      [name]: value,
    });
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
        id="outlined-basic-name"
        name="name"
        label="name"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={editTodo.description}
        onChange={onChange}
        id="outlined-basic-description"
        name="description"
        label="description"
        variant="outlined"
        fullWidth
      />

      <Button
        variant="outlined"
        onClick={onClick}
        disabled={!todo.name || !todo.description}
        startIcon={<EditIcon />}
        title="Edit"
      >
        Edit
      </Button>
    </Paper>
  );
};

export { EditTodoItem };
