import styled from 'styled-components';
import resume from '../assets/Stefan_Pougatchev_Resume.jpg';
import downloadResume from '../assets/Stefan_Pougatchev_Resume.pdf';

const Resume = () => {
  const handleDownload = () => {
    window.open(downloadResume, '_blank');
  };
  return (
    <ResumeWrapper>
      <ResumeImg src={resume} />
      <button onClick={handleDownload}>Download</button>
    </ResumeWrapper>
  );
};

const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  padding: 24px;
  gap: 24px;
  border-radius: 20px;
  border: 1px solid #111;
  background: #fff;
  box-shadow: 8px 8px 0px 0px #000;
`;

const ResumeImg = styled.img`
  display: flex;
  align-items: center;
  align-self: stretch;
  width: 100%;
  border-radius: 10px;
  background: #f4d04e;
  object-fit: cover;
`;

export default Resume;
