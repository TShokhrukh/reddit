import { styled } from '@mui/material';

export const BorderWrapper = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[700]}`,
  borderRadius: 4,
  padding: theme.spacing()
}));
