import React from "react";
import "./App.css";
import { Stack, Typography } from "@mui/material";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <>
      <TodoForm />
      <Stack>
        <Typography variant="h1" color=""></Typography>
      </Stack>
      <TodoItem />
    </>
  );
}

export default App;
