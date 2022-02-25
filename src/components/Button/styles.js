import { styled } from 'solid-styled-components';

const StyledButton = styled('button')`
  background-color: ${(props) => props.theme.color.lightergrey};
  border: none;
  border-radius: ${(props) => props.theme.radius.small};
  padding: ${(props) => props.theme.spaces.small};
  ${(props) =>
    props.variant == 'primary' &&
    `
      color: ${props.theme.color.white};
      background-color: ${props.theme.color.primary};
    `}
  ${(props) =>
    props.variant == 'secondary' &&
    `
      color: 'pink';
    `};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    cursor: ${(props) => (props.loading ? 'progress' : 'not-allowed')};
    background-color: ${(props) => props.theme.color.lightgrey};
  }
`;

export { StyledButton };
