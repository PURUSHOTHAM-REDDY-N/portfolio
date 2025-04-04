import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './contact.module.css';
import { ContactDialog } from './ContactDialog';
const Contact = () => {
    const ContactForm = () => {
        const [open, setopen] = useState(false);
        return (_jsx(_Fragment, { children: !open ? (_jsxs("div", { "data-aos": 'zoom-in-up', className: styles.formlayout, children: [_jsx("input", { placeholder: 'Name', className: styles.form }), _jsx("input", { placeholder: 'Email', className: styles.form }), _jsx("textarea", { rows: 10, placeholder: 'Message', className: styles.form }), _jsx("div", { className: styles.submitbtn, children: _jsx("button", { onClick: () => setopen(true), children: "SUBMIT" }) })] })) : (_jsx(ContactDialog, { open: open, setopen: setopen })) }));
    };
    return (_jsxs("div", { id: 'contact', className: styles.sectionht, children: [_jsx("svg", { preserveAspectRatio: 'none', viewBox: '0 0 100 102', height: '75', width: '100%', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', className: styles.shape, children: _jsx("path", { d: 'M0 0 L50 100 L100 0 Z', fill: 'white', stroke: 'white' }) }), _jsxs("div", { className: styles.layout, children: [_jsxs("div", { className: styles.title, children: [_jsx("div", { "data-aos": 'fade-left', children: "CONTACT" }), _jsx("div", { "data-aos": 'fade-left', "data-aos-delay": '300', className: styles.bottomborder })] }), _jsx(ContactForm, {})] })] }));
};
export default Contact;
