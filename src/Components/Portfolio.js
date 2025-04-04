import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MyProjects from "./MyProjects";
import styles from "./portfolio.module.css";
import Skills from "./Skills";
const Portfolio = () => {
    return (_jsxs("div", { id: "portfolio", className: styles.bg, children: [_jsx(MyProjects, {}), _jsx(Skills, {})] }));
};
export default Portfolio;
