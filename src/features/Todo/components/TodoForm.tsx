import {
  Button,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";

import React, { ReactElement } from "react";

interface Props {}

function TodoForm({}: Props): ReactElement {
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
          id="firstName"
          variant="filled"
          size="small"
          value
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
}

export default TodoForm;
