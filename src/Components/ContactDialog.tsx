import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import * as React from 'react'

import Typography from '@mui/material/Typography'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
interface ContactDialogProps {
  open: boolean;
  setopen: (open: boolean) => void;
}
export const ContactDialog: React.FC<ContactDialogProps> = ({
  open,
  setopen,
}) => {
  return (
    <>
      <Button variant="outlined">Open dialog</Button>
      <Dialog open={open} aria-labelledby="customized-dialog-title">
        <DialogTitle sx={{ m: 0, p: 2 }}>
          My Contact Details
          <IconButton
            aria-label="close"
            onClick={() => setopen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Note: There is some problem with backend API. Please use the details
            below to contact me. Thank you!
          </Typography>
          <Typography gutterBottom>Email: purupowerman@gmail.com</Typography>
          <Typography gutterBottom>Phone: +91 7780769440</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setopen(false)} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
