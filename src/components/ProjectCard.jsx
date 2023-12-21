import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaFileAudio } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

const ProjectCard = ({ icons, date, title, description }) => {
  return (
    <CardWrapper>
      <ProjectThumbnail src='https://via.placeholder.com/327x200' />
      <ProjectDetailsContainer>
        <ProjectCategory>
          <CategoryText>JS & API</CategoryText>
        </ProjectCategory>
        <ProjectDate>Dec 2023</ProjectDate>
        <ProjectTitle>Dictonary Web App</ProjectTitle>
        <ProjectDescription>
          A web app that allows users to search for the meaning of words. Play
          the audio to hear the pronunciation of the word.
        </ProjectDescription>
      </ProjectDetailsContainer>
      <TechStackContainer>
        <FaReact
          size={24}
          color='#61DBFB'
        />
        <RiJavascriptFill
          size={24}
          color='#F7DF1E'
        />
        <FaFileAudio
          size={24}
          color='#111'
        />
        <TbApi
          size={24}
          color='#111'
        />
      </TechStackContainer>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 327px;
  padding: 24px;
  gap: 24px;
  border-radius: 20px;
  border: 1px solid #111;
  background: #fff;
  box-shadow: 8px 8px 0px 0px #000;
`;

const ProjectThumbnail = styled.img`
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 10px;
  background: #f4d04e;
`;

const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const TechStackContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProjectCategory = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: #f4d04e;
`;

const CategoryText = styled.div`
  color: #111;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%;
`;

const ProjectDate = styled.div`
  color: #111;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const ProjectTitle = styled.div`
  color: #111;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%;
  &:hover {
    text-decoration: underline;
    color: #f4d04e;
  }
`;

const ProjectDescription = styled.div`
  text-align: left;
  color: #7f7f7f;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export default ProjectCard;
