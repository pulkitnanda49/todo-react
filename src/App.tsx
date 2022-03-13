import React from "react";
import "./App.css";
import { Stack, Typography } from "@mui/material";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

function App() {
  const mystyle = {
    display: "inline-block",
    mx: "10px",
    transform: "scale(0.8)",
  };
  return (
    <>
      <section style={mystyle}>
        <TodoForm />
        <Stack>
          <Typography variant="h1" color=""></Typography>
        </Stack>
        <TodoItem />
      </section>
    </>
  );
}

export default App;
