import { FC } from "react";

import { Box } from "@mui/material";

import { Todo } from "../../App";
import { TodoItem } from "./TodoItem/TodoItem";
import { EditTodoItem } from "./EditTodoItem/EditTodoItem";

import "../../scss/main.scss";

interface TodoListProps {
  todoList: Todo[];
  editTodo: Todo | null;
  onEdit: (id: Todo["id"]) => void;
  onCheckTodo: (id: Todo["id"]) => void;
  onDeleteTodo: (id: Todo["id"]) => void;
  onChangeTodo: (todo: Omit<Todo, "checked">) => void;
}

const TodoList: FC<TodoListProps> = ({
  onEdit,
  todoList,
  editTodo,
  onCheckTodo,
  onDeleteTodo,
  onChangeTodo,
}) => (
  <Box>
    {todoList.length === 0 ? (
      <p className="text">No todos found</p>
    ) : (
      todoList.map((todo) =>
        todo.id === editTodo?.id ? (
          <EditTodoItem todo={todo} onChangeTodo={onChangeTodo} />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onCheckTodo={onCheckTodo}
            onDeleteTodo={onDeleteTodo}
          />
        )
      )
    )}
  </Box>
);

export { TodoList };
