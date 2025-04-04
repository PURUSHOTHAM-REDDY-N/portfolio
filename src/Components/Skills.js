import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./skills.module.css";
import { skillsData } from "../data/skillsData";
import { motion } from "framer-motion";
// import image from '../images/skillsData/javascript.png'
const Skills = () => {
    let key = 1;
    let slide = 0;
    return (_jsxs("div", { className: "container", children: [_jsxs("div", { className: styles.title, children: [_jsx("div", { "data-aos-delay": "300", "data-aos": "fade-left", children: "I can work with....." }), _jsx("div", { "data-aos": "fade-left", className: styles.bottomborder })] }), _jsx("div", { className: styles.skill_list, children: skillsData.map((ele) => {
                    key = key + 1;
                    slide++;
                    return (_jsxs("div", { "data-aos": slide % 2 === 0 ? "slide-right" : "slide-left", className: styles.skill_container, children: [_jsx("div", { className: styles.skilltitle, children: ele.title }), _jsx("hr", {}), _jsx("div", { className: styles.skilldetail, children: ele.techStack.map((tech) => {
                                    key = key + 1;
                                    return (_jsx(motion.a, { whileTap: "tap", whileHover: {
                                            scale: 1.2,
                                            transition: { duration: 1 },
                                        }, children: _jsxs("div", { className: styles.tech, children: [_jsx("img", { className: styles.tech_img, src: tech.image, alt: tech.title }), _jsx("div", { className: styles.tech_title, children: tech.title })] }, key) }));
                                }) })] }, key));
                }) })] }));
};
export default Skills;
