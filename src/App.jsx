import './App.css';
import ProjectCard from './components/ProjectCard';
import projectInfo from './data/projects.json';

function App() {
  return (
    <>
      {projectInfo.map((project) => (
        <ProjectCard
          key={project.id}
          projectInfo={project}
        />
      ))}
    </>
  );
}

export default App;
