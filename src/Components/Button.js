import * as React from 'react';
import Button from '@mui/material/Button';

export default function DisableElevation() {
  return (
    <div style={{
        display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5vh',
    width: '248vh',
    position:'relative',
    bottom:'440px'
    }}>
    <Button variant="contained" disableElevation>
      Add Note
    </Button>
    </div>
  );
}
