import { Button } from "react-bootstrap";
import "./Buttons.css";
import { ReactNode } from 'react';

interface ButtonOutlineProps {
  texto: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

export default function ButtonOutline({ texto, onClick, className, children }: ButtonOutlineProps) {
  return (
    <Button
      variant="outline-success"
      className={`button-outline ${className}`}
      onClick={onClick}
    >
      {children}
      {texto.toUpperCase()}
    </Button>
  );
}
