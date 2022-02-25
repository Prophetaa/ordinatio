import { styled } from 'solid-styled-components';
import { NavLink as RouterNavLink } from 'solid-app-router';

export const Header = styled('h1')`
  margin-bottom: 10px;
  font-size: ${(props) => props.theme.fontSizes.h1};
`;

export const BodyText = styled('span')`
  font-size: ${(props) => props.theme.fontSizes.body};
  margin: 5px 0;
  font-weight: ${(props) =>
    props.bold ? props.theme.fontWeights.bold : 'inherit'};
`;

export const Label = styled('span')`
  font-size: ${(props) => props.theme.fontSizes.label};
  margin: 5px 0;
  font-weight: ${(props) =>
    props.bold ? props.theme.fontWeights.bold : 'inherit'};
  ${(props) =>
    props.variant === 'error' &&
    `
    color: ${props.theme.color.error};
  `}
`;

export const NavLink = styled(RouterNavLink)`
  font-size: ${(props) => props.theme.fontSizes.label};
  text-align: center;
  margin-bottom: 10px;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary};
`;
