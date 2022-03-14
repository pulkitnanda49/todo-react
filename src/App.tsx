import React, { useReducer, useState } from "react";
import "./App.css";
import { Stack, Typography } from "@mui/material";
import TodoItem from "./features/Todo/components/TodoItem";
import TodoForm from "./features/Todo/components/TodoForm";
import { TodoReducer } from "./features/Todo/reducers/TodoReducer";

function App() {
  const mystyle = {
    display: "inline-block",
    mx: "10px",
    transform: "scale(0.8)",
  };
  const [title, setTitle] = useState("");
  const [state, dispatch] = useReducer(TodoReducer, defaultState);

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
