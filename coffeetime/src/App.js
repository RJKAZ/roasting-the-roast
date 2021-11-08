import './App.css';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core/FormControlLabel';

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label='Testing Checkbox'
    />
  );
}

function App() {
  return (
    <>
      <h1>Hello Coffee Drinkers!</h1>
      <CheckboxExample />
      <ButtonGroup>
        <Button startIcon={<SaveIcon />} variant='contained' color='primary'>
          Save
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          variant='contained'
          color='secondary'
        >
          Discard
        </Button>
      </ButtonGroup>
    </>
  );
}

export default App;
