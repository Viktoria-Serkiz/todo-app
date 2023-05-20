import { FC, ChangeEvent, useState } from "react";

import { Add } from "@mui/icons-material";
import { TextField, Paper, Button } from "@mui/material";

import { Todo } from "../../App";

interface PanelProps {
  onAddTodo: (todo: Omit<Todo, "id" | "checked">) => void;
}

const Panel: FC<PanelProps> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState({ name: "", description: "" });

  const onClick = () => {
    if (todo.name.trim() !== "" && todo.description.trim() !== "") {
      onAddTodo({ ...todo });
      setTodo({ name: "", description: "" });
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
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
        id="outlined-basic-name"
        name="name"
        label="Name"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={todo.description}
        onChange={onChange}
        id="outlined-basic-description"
        name="description"
        label="Description"
        variant="outlined"
        fullWidth
      />
      <Button
        variant="outlined"
        onClick={onClick}
        startIcon={<Add />}
        disabled={todo.name.trim() === "" || todo.description.trim() === ""}
      >
        Add
      </Button>
    </Paper>
  );
};

export { Panel };
