import { Box } from "@mui/material";

import { Header, Panel, TodoList } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Box display="flex" flexDirection="column" width={500}>
        <Header />
        <Panel />
        <TodoList />
      </Box>
    </div>
  );
}

export default App;
