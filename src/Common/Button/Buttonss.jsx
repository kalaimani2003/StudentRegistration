import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./buttonss.css"


export default function Buttonss({ variant, value, type, setButtonFun, buttonFun }) {
  return (
    <Stack spacing={2} direction="row">
      {/* outlined , contained */}
      <Button
        className={variant}
        color="primary"
        type={type}
        variant={variant}
        onClick={() => { setButtonFun(buttonFun) }}
      >
        {value}
      </Button>
    </Stack>
  );
}
