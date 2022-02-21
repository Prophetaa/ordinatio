import { styled } from 'solid-styled-components';

const StyledInput = styled('input')`
  padding: ${(props) => props.theme.spaces.small};
  border: 2px solid
    ${(props) =>
      props.error ? props.theme.color.red : props.theme.color.lightgrey};
  border-radius: ${(props) => props.theme.radius.small};
  margin: ${(props) => props.theme.spaces.xsmall} 0;
  outline-color: ${(props) => props.theme.color.primary};
`;

export { StyledInput };
