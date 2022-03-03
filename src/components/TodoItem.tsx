import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const TodoItem = () => {
  return (
    <Stack
      mt={3}
      sx={{
        display: "inline-block",
        mx: "10px",

        transform: "scale(0.8)",
      }}
    >
      <Card
        sx={{
          display: "flex",
          px: "15px",
          py: "15px",
          width: "550px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography component="div" variant="h3" color="initial">
            Sample Title
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Todo description
          </Typography>
        </Box>
        <Box>
          <Button
            size="small"
            variant="outlined"
            color="error"
            sx={{ my: "12px" }}
          >
            Delete
          </Button>
        </Box>
      </Card>
    </Stack>
  );
};

export default TodoItem;
