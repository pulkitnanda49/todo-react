import { Button, Stack, TextareaAutosize, TextField } from "@mui/material";
import React from "react";

const TodoForm = () => {
  return (
    <Stack
      component="form"
      sx={{
        width: "25ch",
      }}
      mt={3}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
      <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        placeholder="Minimum 3 rows"
        style={{ width: 240 }}
      />
      <Button color="primary">Add Todo</Button>
    </Stack>
  );
};

export default TodoForm;
