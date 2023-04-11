import { Box } from "@mui/material";

import { TodoItem } from "./TodoItem/TodoItem";

const todoList = [
  { id: 1, name: "task 1", description: "test", checked: false },
];

export const TodoList = () => (
  <Box>
    {todoList.map((todo) => (
      <TodoItem todo={todo} />
    ))}
  </Box>
);
