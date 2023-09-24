import styled from '@emotion/styled'

const primaryColor = '#2AF598';
const secondaryColor = '#009EFD';
const whiteColor = '#FFFFFF';
const blackColor = '#071015';

export const WelcomeContainer = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-around;
    align-items: baseline;
    gap: 40px;
    text-align: center;
    margin: 20px;
    span {
        color: transparent;
        font-size: 20px; /* Збільште розмір тексту */
        font-weight: bold; /* Зробіть текст жирним */
        background: linear-gradient(90deg, ${primaryColor}, ${secondaryColor});
        -webkit-background-clip: text;
        background-clip: text;
        display: inline;
    }
    p {
        font-size: 18px;
        color: ${blackColor};
        margin-bottom: 10px;
    }
    button {
        background-color: ${primaryColor};
        color: ${whiteColor};
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }
`;