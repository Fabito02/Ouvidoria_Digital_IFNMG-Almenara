import { Button } from "react-bootstrap";
import "./Buttons.css";

interface ButtonOutlineProps {
  texto: string;
  onClick?: () => void;
}

export default function ButtonOutline({ texto, onClick }: ButtonOutlineProps) {
  return (
    <Button
      variant="outline-success"
      className="button-outline"
      onClick={onClick}
    >
      {texto}
    </Button>
  );
}
