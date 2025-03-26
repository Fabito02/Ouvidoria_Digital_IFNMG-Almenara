import { Button } from "react-bootstrap";
import "./Buttons.css";

interface ButtonProps {
  texto: string;
  className?: string;
}

export default function ButtonNormal({ texto, className }: ButtonProps) {
  return (
    <Button
      variant="success"
      className={`button ${className}`}
    >
      {texto.toUpperCase()}
    </Button>
  );
}
