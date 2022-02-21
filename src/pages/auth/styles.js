import { styled } from 'solid-styled-components';

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 230px;
  min-height: 230px;
  padding: ${(props) => props.theme.spaces.medium};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: ${(props) => props.theme.radius.small};
`;

export { Container, Form };
