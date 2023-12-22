/* eslint-disable react/no-unescaped-entities */
import './App.css';
import ProjectCard from './components/ProjectCard';
import projectInfo from './data/projects.json';
import styled from 'styled-components';
import Navbar from './components/NavBar';
import Resume from './components/Resume';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

function App() {
  return (
    <>
      <Navbar />
      <AboutMeSection id='about'>
        <h2>Hello, I'm Stefan!</h2>
        <p>
          As an experienced full-stack engineer, I currently contribute my
          expertise to the user dashboard team at United Health Care, catering
          to the needs of 50 million users. Beyond the realm of coding, I find
          joy in activities like table tennis, rock climbing, and surfing.
        </p>
        <p>
          This is my portfolio site, where you can explore some of my projects
          that I created. You can connect with me on my{' '}
          <a href='https://www.linkedin.com/in/stefanpougatchev/'>LinkedIn</a>{' '}
          or via email at Stefan.Pougatchev@gmail.com.
        </p>
      </AboutMeSection>
      <WorkSection id='work'>
        <h2>My Work</h2>
        <ProjectContainer>
          {projectInfo.map((project) => (
            <ProjectCard
              key={project.id}
              projectInfo={project}
            />
          ))}
        </ProjectContainer>
      </WorkSection>
      <ResumeSection id='resume'>
        <h2>Resume</h2>
        <Resume />
      </ResumeSection>
      <SocialSection id='social'>
        <p>
          <a
            href='https://www.linkedin.com/in/stefanpougatchev/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin
              size={48}
              color='#111'
            />
          </a>
        </p>
        <p>
          <a
            href='https://github.com/StefanPougatchev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub
              size={48}
              color='#111'
            />
          </a>
        </p>
        <p>
          <a
            href='https://twitter.com/_stefan316?lang=en'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter
              size={48}
              color='#111'
            />
          </a>
        </p>
        <p>
          <a
            href='https://www.youtube.com/@stefanpougatchev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube
              size={48}
              color='#111'
            />
          </a>
        </p>
      </SocialSection>
    </>
  );
}

const AboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #6a3d9a;
  padding: 2rem;
  border-radius: 20px;
  h2 {
    color: #111;
  }
`;

const WorkSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4d04e;
  padding: 2rem;
  border-radius: 20px;
  h2 {
    color: #111;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const ResumeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #4271ae;
  border-radius: 20px;
  padding: 2rem;
  h2 {
    color: #111;
  }
`;

const SocialSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f4904e;
  border-radius: 20px;
  padding: 2rem;
  h2 {
    color: #111;
  }
`;

export default App;
