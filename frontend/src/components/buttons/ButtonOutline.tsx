import { Button } from "react-bootstrap";
import "./Buttons.css";
import { ReactNode } from 'react';

interface ButtonOutlineProps {
  texto?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  href?: string;
}

export default function ButtonOutline({ texto, onClick, className, children, href }: ButtonOutlineProps) {
  return (
    <Button
      variant="outline-success"
      className={`button-outline ${className}`}
      onClick={onClick}
      href={href}
    >
      {children}
      {texto ? texto.toUpperCase() : ''}
    </Button>
  );
}
