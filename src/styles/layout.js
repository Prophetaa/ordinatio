import { styled } from 'solid-styled-components';

export const FlexRow = styled('div')`
  display: flex;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

export const FlexColumn = styled('div')`
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;
