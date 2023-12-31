import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MyButton from './MyButton';
import BoxRollButton from "./BoxRollButton"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Stack direction="row">
          <BoxRollButton />
          <Item>Strength</Item>
        </Stack>
        <Stack direction="row">
          <BoxRollButton />
          <Item>Strength</Item>
        </Stack>
      </Stack>
    </Box>
  );
}
