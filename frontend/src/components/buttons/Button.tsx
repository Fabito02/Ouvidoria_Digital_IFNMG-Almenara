import { Button } from "react-bootstrap";
import "./Buttons.css";

interface ButtonProps {
  texto: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function ButtonNormal({ texto, className, type }: ButtonProps) {
  return (
    <Button
      variant="success"
      className={`button ${className || ""}`}
      type={type}
    >
      {texto.toUpperCase()}
    </Button>
  );
}
