import React from 'react';
import { REDDIT_AUTH_URL } from 'constants/reddit';
import { AuthWrapper } from 'components/AuthWrapper';
import { Button, Typography, useTheme } from '@mui/material';
import { LocalMessage } from 'modules/local';

export function LoginPage() {
  const theme = useTheme();
  // TODO add scopes list
  return (
    <AuthWrapper>
      <Typography variant="h5" textAlign="center" color={theme.palette.secondary.main} gutterBottom>
        <LocalMessage code="authTitle" />
      </Typography>
      <Typography variant="h5" textAlign="center" mb={2} color={theme.palette.grey[400]} gutterBottom>
        <LocalMessage code="authSubTitle" />
      </Typography>
      <Button href={REDDIT_AUTH_URL} variant="contained" fullWidth>
        <LocalMessage code="proceed" />
      </Button>
    </AuthWrapper>
  );
}
