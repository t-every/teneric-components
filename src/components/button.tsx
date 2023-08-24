import { css, setup } from 'goober';
import { ButtonProps } from '../main/types';
import * as React from 'react';

setup(React.createElement);

const buttonDefaultClass = css`
  position: relative;
  display: inline-block;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  cursor: pointer;
  padding: 1rem;
  width: 100%;
  border-radius: 5px;
`;

export const Button: React.FC<ButtonProps> = ({
  text,
  textColor,
  backgroundColor,
  textColorHover,
  backgroundColorHover,
  letterSpacing,
  fontSize,
  fontWeight,
}) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  let linkStyle;

  if (isHovering) {
    linkStyle = {
      color: textColor,
      backgroundColor: backgroundColorHover,
      fontSize: fontSize,
      letterSpacing: letterSpacing,
      fontWeight: fontWeight,
    };
  } else {
    linkStyle = {
      color: textColorHover,
      backgroundColor: backgroundColor,
      fontSize: fontSize,
      letterSpacing: letterSpacing,
      fontWeight: fontWeight,
    };
  }

  return (
      <button 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={linkStyle}
        className={buttonDefaultClass}
      >
        {text}
      </button>
  );
};