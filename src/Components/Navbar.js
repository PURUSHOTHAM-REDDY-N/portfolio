import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./intro.module.css";
const Navbar = () => {
    const routes = [
        {
            name: "Home",
            href: "#home",
        },
        {
            name: "About",
            href: "#about",
        },
        {
            name: "Portfolio",
            href: "#portfolio",
        },
        {
            name: "Contact",
            href: "#contact",
        },
    ];
    // return <div></div>
    return (_jsx("div", { id: "navbar", className: styles.navbar_bg, children: _jsx("div", { className: `container ${styles.navbar}`, children: routes.map((e) => {
                return (_jsx("a", { href: e.href, children: _jsx("div", { children: _jsx("span", { children: e.name }) }) }, e.href));
            }) }) }));
};
export default Navbar;
