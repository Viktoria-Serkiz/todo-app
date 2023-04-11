import { Box } from "@mui/material";

import { Todo } from "../../App";
import { TodoItem } from "./TodoItem/TodoItem";
import { EditTodoItem } from "./EditTodoItem/EditTodoItem";

interface ITodoList {
  todoList: Todo[];
  editTodoId: Todo["id"] | null;
  onEdit: (id: Todo["id"]) => void;
  onCheckTodo: (id: Todo["id"]) => void;
  onDeleteTodo: (id: Todo["id"]) => void;
  onChangeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

export const TodoList: React.FC<ITodoList> = ({
  onEdit,
  todoList,
  editTodoId,
  onCheckTodo,
  onDeleteTodo,
  onChangeTodo,
}) => (
  <Box>
    {todoList.map((todo) => {
      if (todo.id === editTodoId)
        return (
          <EditTodoItem key={todo.id} todo={todo} onChangeTodo={onChangeTodo} />
        );
      return (
        <TodoItem
          todo={todo}
          key={todo.id}
          onEdit={onEdit}
          onCheckTodo={onCheckTodo}
          onDeleteTodo={onDeleteTodo}
        />
      );
    })}
  </Box>
);
