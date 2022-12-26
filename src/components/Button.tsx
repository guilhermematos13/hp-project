import { ReactNode } from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
}

export const Button = ({
  name,
  type,
  onClick,
  className,
  children,
  icon,
}: ButtonProps) => {
  return (
    <button type={type} className={`${className}`} onClick={onClick}>
      {icon && icon} {!children && name} {children && children}
    </button>
  );
};
