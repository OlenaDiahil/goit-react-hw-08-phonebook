import styled from '@emotion/styled';

const primaryColor = '#2AF598';
const secondaryColor = '#009EFD';
const whiteColor = '#FFFFFF';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 20px; 
    background: ${whiteColor};
    position: relative; 
`;

export const Title = styled.h1`
  font-size: 36px;
  color: transparent;
  background: linear-gradient(90deg, ${primaryColor}, ${secondaryColor});
  -webkit-background-clip: text;
  background-clip: text;
  transform-origin: left top;
  white-space: nowrap;
`;
