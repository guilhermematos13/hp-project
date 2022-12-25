interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

export const Button = ({ name, type, onClick, className }: ButtonProps) => {
  return (
    <button type={type} className={`${className}`} onClick={onClick}>
      {name}
    </button>
  );
};
