import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
    display: flex;
    background-color: #efbbcc;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    align-items: center;

    label {
      color: #080708;
      text-transform: capitalize;
      margin: 10px;
      text-decoration: ${done ? `line-through` : 'null'};
    }

    input {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
  `,
);
