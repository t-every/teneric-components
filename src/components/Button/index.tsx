import * as React from "react";
import { ButtonProps } from '../../main/types';

export const Button: React.FC<ButtonProps> = ({
  text
}) => {
  return <button type="button">Button {text}</button>;
}
