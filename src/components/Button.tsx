import { ReactNode } from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  children?: ReactNode;
}

export const Button = ({
  name,
  type,
  onClick,
  className,
  children,
}: ButtonProps) => {
  return (
    <button type={type} className={`${className}`} onClick={onClick}>
      {!children && name} {children && children}
    </button>
  );
};
