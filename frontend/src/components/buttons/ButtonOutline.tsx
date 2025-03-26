import { Button } from "react-bootstrap";
import "./Buttons.css";

interface ButtonOutlineProps {
  texto: string;
  onClick?: () => void;
  className?: string;
}

export default function ButtonOutline({ texto, onClick, className }: ButtonOutlineProps) {
  return (
    <Button
      variant="outline-success"
      className={`button-outline ${className}`}
      onClick={onClick}
    >
      {texto.toUpperCase()}
    </Button>
  );
}
