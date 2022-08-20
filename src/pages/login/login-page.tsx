import React from 'react';
import { REDDIT_AUTH_URL } from 'constants/reddit';
import { Grid } from '@mui/material';

export function LoginPage() {
  return (
    <Grid container direction="column" justifyContent="center" spacing={2}>
      <Grid item xs={12}>

        <a href={REDDIT_AUTH_URL}>REDDIT_AUTH_URL</a>
      </Grid>
    </Grid>
  );
}
