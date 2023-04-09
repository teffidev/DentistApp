import React from "react";
import { Alert, Box, Button, Grid, Stack, TextField } from "@mui/material";

export const Contact = (formErr, isLogged, handleChange, handleSubmit) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",

          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>How may we help you?</h2>
        <Grid
          container
          spacing={2}
          flexDirection="column"
          alignContent="center"
        >
          <form maxwidth="100%" padding="10px 20px" onSubmit={handleSubmit}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                margin="normal"
                id="fullWidth"
                label="Name"
                onChange={(e) => handleChange(e, "name")}
              />
            </Grid>
            <span>{formErr.name}</span>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                margin="normal"
                id="fullWidth"
                label="Email"
                onChange={(e) => handleChange(e, "email")}
              />
            </Grid>
            <span>{formErr.email}</span>
            <Grid item xs={12} sm={6}>
              <TextField
                id="fullWidth"
                margin="normal"
                label="Details"
                multiline
                rows={4}
                onChange={(e) => handleChange(e, "info")}
              />
            </Grid>

            <Stack
              spacing={2}
              sx={{ m: 2 }}
              direction="row"
              justifyContent="center"
            >
              <Button variant="contained" type="text">
                Enviar
              </Button>
            </Stack>
          </form>
        </Grid>

        {isLogged && (
          <Alert severity="success" margin="auto">
            Your message has been sent correctly!
          </Alert>
        )}
      </Box>
    </div>
  );
};
