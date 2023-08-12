import React, { useState } from "react";
import { ButtonProps } from '../../main/types';
import styles from "./styles.module.scss";

export const Button: React.FC<ButtonProps> = ({
  text,
  textColor,
  backgroundColor,
  textColorHover,
  backgroundColorHover,
  padding,
  letterSpacing,
  fontSize,
  fontWeight,
  ...rest
}) => {

  const [isHovering, setIsHovering] = useState(false);

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
      padding: padding,
      fontSize: fontSize,
      letterSpacing: letterSpacing,
      fontWeight: fontWeight,
    };
  } else {
    linkStyle = {
      color: textColorHover,
      backgroundColor: backgroundColor,
      padding: padding,
      fontSize: fontSize,
      letterSpacing: letterSpacing,
      fontWeight: fontWeight,
    };
  }

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={styles.button_container}
      style={linkStyle}
      {...rest}
    >
      {text}
    </button>
  );
}
