import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './footer.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
const list = [
    {
        name: 'Github',
        href: 'https://github.com/PURUSHOTHAM-REDDY-N/',
        symbol: _jsx(GitHubIcon, { className: styles.btn }),
    },
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/purushotham-reddy-a608421b9/',
        symbol: _jsx(LinkedInIcon, { className: styles.btn }),
    },
    // {
    //     name: 'Instagram',
    //     href: 'https://www.instagram.com/partheevonline/',
    //     symbol: <InstagramIcon className={styles.btn} />,
    // },
    // {
    //     name: 'Youtube',
    //     href: 'https://www.youtube.com/c/PartheevVideoClub',
    //     symbol: <YouTubeIcon className={styles.btn} />,
    // },
];
const Footer = () => {
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    const date = new Date;
    return (_jsxs("div", { className: styles.footerlayout, children: [_jsx("div", { onClick: topFunction, className: styles.backtotop, children: _jsx(DoubleArrowIcon, {}) }), _jsx("div", { className: styles.medialist, children: list.map((e) => {
                    return (_jsx("div", { onClick: () => window.open(e.href, '_blank')?.focus(), className: styles.mediabtn, children: e.symbol }, e.name));
                }) }), _jsxs("div", { className: styles.copyright, children: ["PURUSHOTHAM ", _jsxs("span", { children: [" \u00A9", date.getFullYear()] }), ' '] })] }));
};
export default Footer;
