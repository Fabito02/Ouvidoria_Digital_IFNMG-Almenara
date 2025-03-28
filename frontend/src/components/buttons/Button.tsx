import { Button } from "react-bootstrap";
import "./Buttons.css";
import { ReactNode } from 'react';

interface ButtonProps {
  texto: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
}

export default function ButtonNormal({ texto, className, type, children }: ButtonProps) {
  return (
    <Button
      variant="success"
      className={`button ${className || ""}`}
      type={type}
    >
      {children}
      {texto.toUpperCase()}
    </Button>
  );
}
