import './App.css';
import ProjectCard from './components/ProjectCard';
import projectInfo from './data/projects.json';
import styled from 'styled-components';
import Navbar from './components/NavBar';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Navbar />
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
    </>
  );
}

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

export default App;
