import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Avatar, Box, Paper, Typography } from '@mui/material';
import styles from './about.module.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { cardDetails, workTimelineData } from '../data/workTimelineData';
import { TimelineOppositeContent } from '@mui/lab';
const About = () => {
    const Cards = () => {
        const Card = ({ heading, message, image }) => {
            return (_jsxs("div", { className: styles.card, children: [_jsx("img", { src: image, alt: heading }), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column' }, children: [_jsx("h2", { children: heading }), _jsx("p", { children: message })] })] }));
        };
        return (_jsx("div", { children: cardDetails.map((e) => {
                return (_jsx("div", { "data-aos": 'flip-down', children: _jsx(Paper, { elevation: 3, children: _jsx(Card, { heading: e.title, image: e.image, message: e.message }) }) }, e.title));
            }) }));
    };
    const WorkExperienceTimeline = () => {
        const CompanyContent = ({ companyName, role, logo }) => {
            return (_jsxs(Box, { sx: {
                    display: 'flex',
                }, children: [_jsx(Avatar, { src: logo, sx: { marginX: '1.5rem' } }), _jsxs(Box, { children: [_jsx(Typography, { sx: { fontWeight: 'bold', fontSize: '0.9rem' }, children: companyName }), _jsx(Typography, { sx: { fontSize: '0.8rem' }, color: 'GrayText', children: role })] })] }));
        };
        return (_jsxs(_Fragment, { children: [_jsxs(Box, { sx: {
                        display: 'flex',
                        columnGap: '2rem',
                        marginTop: '2rem',
                    }, children: [_jsx("img", { alt: 'work experience', width: '50rem', src: '/images/card/workexp.png' }), _jsxs("div", { className: styles.title, children: [_jsx("div", { "data-aos-delay": '300', "data-aos": 'fade-left', children: "Work Experience" }), _jsx("div", { "data-aos": 'fade-left', className: styles.bottomborder })] })] }), _jsx(Timeline, { sx: {
                    // border: '1px solid red',
                    // width: '100%',
                    }, children: workTimelineData.map((work, index) => {
                        return (_jsxs(TimelineItem, { sx: { cursor: 'pointer' }, onClick: () => window.open(work.link, '_blank'), children: [_jsx(TimelineOppositeContent, { color: 'text.secondary', sx: { flex: '0' }, children: "Dec 22" }), _jsxs(TimelineSeparator, { children: [_jsx(TimelineDot, { color: 'primary' }), _jsx(TimelineConnector, {})] }), _jsx(TimelineContent, { children: _jsx(CompanyContent, { logo: work.logo, companyName: work.companyName, role: work.role }) })] }, index));
                    }) })] }));
    };
    const AboutDetails = () => {
        return (_jsxs(Box, { sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
            }, children: [_jsxs("div", { className: styles.aboutdetails, children: [_jsxs("div", { className: styles.title, children: [_jsx("span", { className: styles.titlesm, "data-aos": 'fade-left', children: "LET ME INTRODUCE MYSELF" }), _jsx("span", { className: styles.titlebig, "data-aos": 'fade-left', "data-aos-delay": '300', children: "About me" })] }), _jsx("div", { className: styles.aboutpara, children: _jsx("p", { children: "I'm enthusiastic software developer. My passion towards computer science made me full stack web/App developer. Continuously learning new and modern technologies to make better applications. Aspiring about WEB 3 and Blockchain Technology." }) }), _jsx("a", { href: './cv.pdf', target: '_blank', className: styles.cvbtn, children: _jsx("button", { children: "DOWNLOAD CV" }) })] }), _jsx(WorkExperienceTimeline, {})] }));
    };
    const AboutLayout = () => {
        return (_jsxs("div", { className: styles.layout, children: [_jsx(Cards, {}), _jsx(AboutDetails, {})] }));
    };
    return (_jsx("section", { id: 'about', className: styles.about, children: _jsx("div", { className: 'container', children: _jsx(AboutLayout, {}) }) }));
};
export default About;
