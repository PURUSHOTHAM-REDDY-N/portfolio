import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));
export const ContactDialog = ({ open, setopen, }) => {
    return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "outlined", children: "Open dialog" }), _jsxs(Dialog, { open: open, "aria-labelledby": "customized-dialog-title", children: [_jsxs(DialogTitle, { sx: { m: 0, p: 2 }, children: ["My Contact Details", _jsx(IconButton, { "aria-label": "close", onClick: () => setopen(false), sx: {
                                    position: "absolute",
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }, children: _jsx(CloseIcon, {}) })] }), _jsxs(DialogContent, { dividers: true, children: [_jsx(Typography, { gutterBottom: true, children: "Note: There is some problem with backend API. Please use the details below to contact me. Thank you!" }), _jsx(Typography, { gutterBottom: true, children: "Email: purupowerman@gmail.com" }), _jsx(Typography, { gutterBottom: true, children: "Phone: +91 7780769440" })] }), _jsx(DialogActions, { children: _jsx(Button, { onClick: () => setopen(false), autoFocus: true, children: "OK" }) })] })] }));
};
