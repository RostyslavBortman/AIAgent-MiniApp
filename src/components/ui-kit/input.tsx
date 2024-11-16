import { InputAdornment, TextField, TextFieldProps, Typography } from '@mui/material';
import { ChangeEvent } from 'react';

type Props = {
  onChange: (value: string) => void;
} & Omit<TextFieldProps, 'onChange'>;

export const Input = ({ onChange, InputProps, helperText, variant, ...props }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      fullWidth
      variant={variant}
      error={!!helperText}
      helperText={
        helperText && (
          <Typography variant="caption2" color="error.main">
            {helperText}
          </Typography>
        )
      }
      onChange={handleChange}
      {...props}
      InputProps={{
        ...(variant === 'filled' && {
          disableUnderline: true,
        }),
        ...InputProps,
        ...(InputProps?.startAdornment && {
          startAdornment: (
            <InputAdornment position="start">{InputProps.startAdornment}</InputAdornment>
          ),
        }),
      }}
    />
  );
};
