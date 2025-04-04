import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Dialog } from "@mui/material";
import { useState } from "react";
import styles from "./portfolio.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projectData } from "../data/projectsData";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const MyProjects = () => {
    const [project, setProject] = useState({
        open: false,
        projectDetails: null,
    });
    const handleClose = () => {
        setProject((prev) => ({
            ...prev,
            open: !prev.open,
        }));
    };
    const openProjectHandler = (projectIdx) => {
        const projectDetails = projectData[projectIdx];
        setProject({
            projectDetails,
            open: true,
        });
    };
    const ProjectDialog = () => {
        if (!project.projectDetails)
            return null;
        return (_jsx(Dialog, { open: project.open, maxWidth: "md", fullWidth: true, onClose: handleClose, scroll: "paper", children: _jsxs("div", { className: styles.projectlayout, children: [_jsxs("div", { className: styles.titlecontainer, children: [_jsx("h2", { children: project.projectDetails?.name }), _jsx("div", { onClick: handleClose, children: "Close" })] }), _jsx("hr", {}), _jsxs("div", { className: styles.procontent, children: [_jsx("div", { className: styles.githubbtn, children: _jsxs("div", { onClick: () => window.open(project.projectDetails?.githubLink), className: styles.btnflex, children: [_jsx(GitHubIcon, { sx: {
                                                marginRight: "1rem",
                                                fontSize: "2rem",
                                                color: "white",
                                            } }), _jsx("span", { children: "View Project" })] }) }), _jsx("h4", { children: "Description:" }), _jsx("p", { children: project.projectDetails?.description }), _jsx("h4", { children: "Tools Used:" }), _jsx("div", { className: styles.techstack, children: project.projectDetails?.techstack.map((tech, idx) => (_jsx("li", { children: tech }, idx))) }), _jsx("h4", { children: "Features:" }), _jsx("div", { children: _jsx("ol", { children: project.projectDetails?.features.map((feature, idx) => (_jsx("li", { children: feature }, idx))) }) }), project.projectDetails?.images.length !== 0 && (_jsxs(_Fragment, { children: [_jsx("h3", { children: "Images" }), _jsx("div", { children: project.projectDetails?.images.map((img, idx) => (_jsx("img", { className: styles.projectimg, alt: project.projectDetails?.name, src: img }, idx))) })] }))] })] }) }));
    };
    const Project = ({ projectIdx, projectDetails }) => {
        const [isHover, setIsHover] = useState(false);
        return (_jsx("div", { style: !isHover
                ? {
                    backgroundSize: "cover",
                    backgroundImage: `url(${projectDetails.outlookImg})`,
                }
                : {}, onClick: () => setIsHover(true), onMouseEnter: () => setIsHover(true), onMouseLeave: () => setIsHover(false), className: `${styles.project} ${isHover ? styles.projecthover : " "}`, children: isHover && (_jsxs(_Fragment, { children: [_jsx("span", { className: styles.projecthead, children: projectDetails.name }), _jsx("p", { className: styles.description, children: projectDetails.description }), _jsxs("div", { onClick: () => openProjectHandler(projectIdx), className: styles.seebtn, children: [_jsx("span", { children: "See Details" }), _jsx(ArrowForwardIosIcon, { sx: { color: "white" } })] })] })) }));
    };
    return (_jsxs("div", { className: `${styles.myprojectcon} container`, children: [_jsxs("div", { className: styles.title, children: [_jsx("div", { "data-aos-delay": "300", "data-aos": "fade-left", children: "My Projects" }), _jsx("div", { "data-aos": "fade-left", className: styles.bottomborder })] }), _jsx("div", { className: styles.projectitems, children: projectData.map((project, idx) => (_jsx(Project, { projectIdx: idx, projectDetails: project }, idx))) }), project.open && _jsx(ProjectDialog, {})] }));
};
export default MyProjects;
