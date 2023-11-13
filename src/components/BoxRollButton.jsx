import * as React from 'react';
import { Box } from '@mui/system';
import MyButton from './MyButton';

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 1, border: '1px dashed grey' }}>
      <MyButton >Roll</MyButton>
    </Box>
  );
}
