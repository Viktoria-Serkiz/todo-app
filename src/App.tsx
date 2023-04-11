import { useState } from "react";

import { Box } from "@mui/material";

import { Header, Panel, TodoList } from "./components";

import "./App.scss";

export type Todo = {
  id: number;
  name: string;
  checked: boolean;
  description: string;
};

export const App = () => {
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [todoList, setTodoList] = useState([
    { id: 1, name: "task 1", description: "test", checked: false },
  ]);

  const onDeleteTodo = (id: Todo["id"]) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const onAddTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    setTodoList([
      ...todoList,
      {
        id: todoList[todoList.length - 1].id + 1,
        description,
        name,
        checked: false,
      },
    ]);
  };

  const onCheckTodo = (id: Todo["id"]) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const onEdit = (id: Todo["id"]) => {
    setEditTodoId(id);
  };

  const onChangeTodo = ({
    name,
    description,
  }: Omit<Todo, "id" | "checked">) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === editTodoId) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setEditTodoId(null);
  };

  return (
    <div className="app">
      <Box display="flex" flexDirection="column" width={500}>
        <Header todoCount={todoList.length} />
        <Panel onAddTodo={onAddTodo} />
        <TodoList
          onEdit={onEdit}
          todoList={todoList}
          editTodoId={editTodoId}
          onCheckTodo={onCheckTodo}
          onDeleteTodo={onDeleteTodo}
          onChangeTodo={onChangeTodo}
        />
      </Box>
    </div>
  );
};

export default App;
