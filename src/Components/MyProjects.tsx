import { Dialog } from "@mui/material";
import React, { useState } from "react";
import styles from "./portfolio.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projectData } from "../data/projectsData";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Define TypeScript Types
type ProjectType = {
  name: string;
  description: string;
  githubLink: string;
  techstack: string[];
  features: string[];
  images: string[];
  outlookImg: string;
};

type ProjectState = {
  open: boolean;
  projectDetails: ProjectType | null;
};

const MyProjects: React.FC = () => {
  const [project, setProject] = useState<ProjectState>({
    open: false,
    projectDetails: null,
  });

  const handleClose = () => {
    setProject((prev) => ({
      ...prev,
      open: !prev.open,
    }));
  };

  const openProjectHandler = (projectIdx: number) => {
    const projectDetails = projectData[projectIdx];
    setProject({
      projectDetails,
      open: true,
    });
  };

  const ProjectDialog: React.FC = () => {
    if (!project.projectDetails) return null;

    return (
      <Dialog
        open={project.open}
        maxWidth="md"
        fullWidth={true}
        onClose={handleClose}
        scroll="paper"
      >
        <div className={styles.projectlayout}>
          <div className={styles.titlecontainer}>
            <h2>{project.projectDetails?.name}</h2>
            <div onClick={handleClose}>Close</div>
          </div>
          <hr />

          <div className={styles.procontent}>
            <div className={styles.githubbtn}>
              <div
                onClick={() => window.open(project.projectDetails?.githubLink)}
                className={styles.btnflex}
              >
                <GitHubIcon
                  sx={{
                    marginRight: "1rem",
                    fontSize: "2rem",
                    color: "white",
                  }}
                />
                <span>View Project</span>
              </div>
            </div>
            <h4>Description:</h4>
            <p>{project.projectDetails?.description}</p>

            <h4>Tools Used:</h4>
            <div className={styles.techstack}>
              {project.projectDetails?.techstack.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </div>

            <h4>Features:</h4>
            <div>
              <ol>
                {project.projectDetails?.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ol>
            </div>

            {project.projectDetails?.images.length !== 0 && (
              <>
                <h3>Images</h3>
                <div>
                  {project.projectDetails?.images.map((img, idx) => (
                    <img
                      className={styles.projectimg}
                      key={idx}
                      alt={project.projectDetails?.name}
                      src={img}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </Dialog>
    );
  };

  type ProjectProps = {
    projectIdx: number;
    projectDetails: ProjectType;
  };

  const Project: React.FC<ProjectProps> = ({ projectIdx, projectDetails }) => {
    const [isHover, setIsHover] = useState(false);

    return (
      <div
        style={
          !isHover
            ? {
                backgroundSize: "cover",
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + projectDetails.outlookImg
                })`,
              }
            : {}
        }
        onClick={() => setIsHover(true)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`${styles.project} ${isHover ? styles.projecthover : " "}`}
      >
        {isHover && (
          <>
            <span className={styles.projecthead}>{projectDetails.name}</span>
            <p className={styles.description}>{projectDetails.description}</p>
            <div
              onClick={() => openProjectHandler(projectIdx)}
              className={styles.seebtn}
            >
              <span>See Details</span>
              <ArrowForwardIosIcon sx={{ color: "white" }} />
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className={`${styles.myprojectcon} container`}>
      <div className={styles.title}>
        <div data-aos-delay="300" data-aos="fade-left">
          My Projects
        </div>
        <div data-aos="fade-left" className={styles.bottomborder}></div>
      </div>
      <div className={styles.projectitems}>
        {projectData.map((project, idx) => (
          <Project key={idx} projectIdx={idx} projectDetails={project} />
        ))}
      </div>
      {project.open && <ProjectDialog />}
    </div>
  );
};

export default MyProjects;
