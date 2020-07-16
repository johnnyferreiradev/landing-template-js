import styled from 'styled-components';
import { Link } from 'react-router-dom';

const primaryColor = '#88898C';
// const secondColor = '#D7D7D9';
const tertiaryColor = '#404040';
// const darkColor = '#00010D';
const whiteColor = '#ffffff';
const dangerColor = '#D03A41';
const warningColor = '#F1CC07';
const successColor = '#0AE569';
const infoColor = '#5C73F2';

const buttonThemes = {
  primary: {
    background: primaryColor,
    color: whiteColor,
    border: 'none',
    hoverColor: tertiaryColor,
    boxShadow: `0 2px 4px 0 ${primaryColor}55`,
  },
  secondary: {
    background: whiteColor,
    color: tertiaryColor,
    border: `2px solid ${primaryColor}`,
    hoverColor: '#fafafa',
    boxShadow: 'none',
  },
  link: {
    background: 'none',
    color: tertiaryColor,
    border: 'none',
    hoverColor: 'none',
    boxShadow: 'none',
  },
  danger: {
    background: dangerColor,
    color: whiteColor,
    border: 'none',
    hoverColor: `${dangerColor}cc`,
    boxShadow: `0 2px 4px 0 ${dangerColor}55`,
  },
  warning: {
    background: warningColor,
    color: whiteColor,
    border: 'none',
    hoverColor: `${warningColor}cc`,
    boxShadow: `0 2px 4px 0 ${warningColor}55`,
  },
  success: {
    background: successColor,
    color: whiteColor,
    border: 'none',
    hoverColor: `${successColor}cc`,
    boxShadow: `0 2px 4px 0 ${successColor}55`,
  },
  info: {
    background: infoColor,
    color: whiteColor,
    border: 'none',
    hoverColor: `${infoColor}cc`,
    boxShadow: `0 2px 4px 0 ${infoColor}55`,
  },
};

const StyledButton = styled.button`
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border: ${({ theme }) => buttonThemes[theme].border};
  background: ${({ theme }) => buttonThemes[theme].background};
  color:${({ theme }) => buttonThemes[theme].color};
  cursor: pointer;
  outline: none;
  box-shadow: ${({ theme }) => buttonThemes[theme].boxShadow};
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  transition: all .5s;
  :hover {
    color: ${({ theme }) => (theme === 'link' ? buttonThemes[theme].hoverColor : buttonThemes[theme].color)};
    background: ${({ theme }) => (theme !== 'link' ? buttonThemes[theme].hoverColor : 'none')};
    transition: all .2s;
  }
`;

const StyledLink = styled(Link)`
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border: ${({ theme }) => buttonThemes[theme].border};
  background: ${({ theme }) => buttonThemes[theme].background};
  color:${({ theme }) => buttonThemes[theme].color};
  cursor: pointer;
  outline: none;
  box-shadow: ${({ theme }) => buttonThemes[theme].boxShadow};
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  transition: all .5s;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  :hover {
    color: ${({ theme }) => (theme === 'link' ? buttonThemes[theme].hoverColor : buttonThemes[theme].color)};
    background: ${({ theme }) => (theme !== 'link' ? buttonThemes[theme].hoverColor : 'none')};
    transition: all .2s;
  }
`;

const StyledAnchor = styled.a`
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border: ${({ theme }) => buttonThemes[theme].border};
  background: ${({ theme }) => buttonThemes[theme].background};
  color:${({ theme }) => buttonThemes[theme].color};
  cursor: pointer;
  outline: none;
  box-shadow: ${({ theme }) => buttonThemes[theme].boxShadow};
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  transition: all .5s;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  :hover {
    color: ${({ theme }) => (theme === 'link' ? buttonThemes[theme].hoverColor : buttonThemes[theme].color)};
    background: ${({ theme }) => (theme !== 'link' ? buttonThemes[theme].hoverColor : 'none')};
    transition: all .2s;
  }
`;

export {
  StyledButton,
  StyledLink,
  StyledAnchor,
};
