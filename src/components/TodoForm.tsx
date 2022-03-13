import {
  Button,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const TodoForm = () => {
  return (
    <section>
      <Stack
        component="form"
        mt={3}
        mb={20}
        spacing={2}
        noValidate
        autoComplete="off"
        sx={{
          justifyContent: "center",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          padding: "20px",
        }}
      >
        <Typography variant="h6" color="initial">
          {" "}
          Todo Form
        </Typography>
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
        />
        <Button color="primary">Add Todo</Button>
      </Stack>
    </section>
  );
};

export default TodoForm;
