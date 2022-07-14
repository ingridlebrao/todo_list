import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 12px;

  .image {
    margin-right: 5px;
  }

  input {
    border: 0;
    background: transparent;
    outline: 0;
    font-size: 16px;
    color: #000;
    flex: 1;
    font-family: 'IBM Flex Mono', monospace;
  }
`;
