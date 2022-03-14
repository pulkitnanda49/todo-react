import { Box, Button, Card, Stack, Typography } from "@mui/material";

import React, { ReactElement } from "react";

interface Props {}

function TodoItem({}: Props): ReactElement {
  return (
    <section>
      <Stack mt={3}>
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
            }}
          >
            <Box
              sx={{
                display: "flex",
                FlexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography component="div" variant="h3" color="initial">
                Sample Title
              </Typography>
              <Button
                size="small"
                variant="outlined"
                color="error"
                sx={{ my: "12px" }}
              >
                Delete
              </Button>
            </Box>

            <Typography variant="body1" color="text.secondary">
              Todo description
            </Typography>
          </Box>
        </Card>
      </Stack>
    </section>
  );
}

export default TodoItem;
