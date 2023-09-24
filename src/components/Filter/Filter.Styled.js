import styled from '@emotion/styled';

const blackColor = '#071015';
const grayColor = '#656565';

export const FilterContainer = styled.div`
  text-align: center;
  margin: 20px;
  label {
    font-size: 18px;
    color: ${blackColor};
  }
  input {
    width: 100%;
    padding: 10px;
    margin-top: 8px;
    border: 1px solid ${grayColor};
    border-radius: 5px;
    font-size: 16px;
  }
`;