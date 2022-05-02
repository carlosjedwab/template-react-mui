import * as React from 'react';
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  hiddenType?: string;
}

export const TextField = (props: TextFieldProps) => {
  const [show, setShow] = React.useState(false);

  const normalType = props.type || 'text';
  const type = props.hiddenType ? (show ? normalType : props.hiddenType) : normalType;

  const endAdornment = props.hiddenType ? (
    <InputAdornment position="end">
      <IconButton aria-label="toggle password visibility" onClick={() => setShow(!show)} edge="end">
        {show ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  ) : null;

  return (
    <>
      <InputLabel>{props.label}</InputLabel>
      <OutlinedInput
        id={props.label}
        type={type}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        label={props.label}
        endAdornment={endAdornment}
        fullWidth
      />
    </>
  );
};
