import {
  Dialog,
  DialogTitle,
  DialogActions,
  Typography,
  DialogProps,
  SxProps,
} from '@mui/material';
import { ReactElement } from 'react';

export interface BaseDialogProps extends DialogProps {
  header?: string;
  actions?: ReactElement;
  onClose?: () => void;
  sxContent?: SxProps;
  size?: number;
  disableBackdropClick?: boolean;
}

export const BaseDialog = ({ actions, header, onClose, ...props }: BaseDialogProps) => {
  return (
    <Dialog
      aria-modal
      PaperProps={{
        sx: {
          width: '100vw',
          overflow: 'unset',
          borderRadius: '12px',
          height: '150px',
          mt: 'auto',
        },
      }}
      {...props}
      onClose={onClose}
    >
      {header && (
        <DialogTitle>
          <Typography variant="h4" color="text.secondary" textAlign="center">
            {header}
          </Typography>
        </DialogTitle>
      )}

      {actions && (
        <DialogActions sx={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
};
