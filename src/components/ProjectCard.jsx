/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaFileAudio } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

const iconComponents = {
  FaReact,
  RiJavascriptFill,
  FaFileAudio,
  TbApi,
};

const ProjectCard = ({ projectInfo }) => {
  return (
    <CardWrapper>
      <ProjectThumbnail src={projectInfo.thumbnail} />
      <ProjectDetailsContainer>
        <ProjectCategory>
          <ProjectAnchor
            target='_blank'
            rel='noopener noreferrer'
            href={projectInfo.repo}
          >
            <CategoryText>Github</CategoryText>
            {/* github link to repo */}

            <FaGithub
              size={12}
              color='#111'
            />
          </ProjectAnchor>
        </ProjectCategory>
        <ProjectDate>{projectInfo.date}</ProjectDate>
        <ProjectTitle
          target='_blank'
          href={projectInfo.url}
        >
          {projectInfo.title}
        </ProjectTitle>
        <ProjectDescription>{projectInfo.description}</ProjectDescription>
      </ProjectDetailsContainer>
      <TechStackContainer>
        {projectInfo.icons.map((iconName) => {
          const IconComponent = iconComponents[iconName];
          return (
            <IconComponent
              key={iconName}
              size={24}
              color='#f4d04e'
            />
          );
        })}
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
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: #f4d04e;
`;

const ProjectAnchor = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
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

const ProjectTitle = styled.a`
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
