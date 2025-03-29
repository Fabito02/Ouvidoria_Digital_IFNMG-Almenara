import { Button } from "react-bootstrap";
import "./Buttons.css";
import { ReactNode } from 'react';

interface ButtonProps {
  texto?: string | "";
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
  href?: string;
}

export default function ButtonNormal({ texto, className, type, children, href }: ButtonProps) {
  return (
    <Button
      variant="success"
      className={`button ${className || ""}`}
      type={type}
      href={href}
    >
      {children}
      {texto ? texto.toUpperCase() : ""}
    </Button>
  );
}
