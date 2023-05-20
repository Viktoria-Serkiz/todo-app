import { useState, useEffect } from "react";

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
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodoList = localStorage.getItem("todoList");
    if (savedTodoList) {
      setTodoList(JSON.parse(savedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const onDeleteTodo = (id: Todo["id"]) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
    );
  };

  const onAddTodo = (todo: Omit<Todo, "id" | "checked">) => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      {
        id:
          prevTodoList.length > 0
            ? prevTodoList[prevTodoList.length - 1].id + 1
            : 0,
        ...todo,
        checked: false,
      },
    ]);
  };

  const onCheckTodo = (id: Todo["id"]) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const onEdit = (id: Todo["id"]) => {
    const todo = todoList.find((todo) => todo.id === id);
    if (todo) {
      setEditTodo(todo);
    }
  };

  const onChangeTodo = (updatedTodo: Omit<Todo, "checked">) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todoItem) =>
        todoItem.id === editTodo?.id
          ? { ...todoItem, ...updatedTodo }
          : todoItem
      )
    );
    setEditTodo(null);
  };

  return (
    <div className="app">
      <Box display="flex" flexDirection="column" width={500}>
        <Header todoCount={todoList.length} />
        <Panel onAddTodo={onAddTodo} />
        <TodoList
          onEdit={onEdit}
          todoList={todoList}
          editTodo={editTodo}
          onCheckTodo={onCheckTodo}
          onDeleteTodo={onDeleteTodo}
          onChangeTodo={onChangeTodo}
        />
      </Box>
    </div>
  );
};

export default App;
