import { Button } from "react-bootstrap";
import "./Buttons.css";
import { ReactNode } from 'react';
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

interface ButtonProps {
  texto?: string | "";
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
  href?: string;
  icon?: string;
  outline?: boolean;
  iconPosition?: "left" | "right" | undefined;
  onClick?: () => void;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}

const iconSeExistir = (icon: string | undefined, iconPosition?: "left" | "right" | undefined) => {
  if (icon) {
    return <Icon icon={icon} className={`icon-button ${iconPosition ? iconPosition : "left"}`} />;
  }
  return null;
}

export default function ButtonNormal({ texto, className, type, children, href, icon, outline, iconPosition, onClick, color = "primary" }: ButtonProps) {
  return (
    <Button
      variant={outline ? "outline-" + color : color}
      className={`${outline ? "button-outline" : "button"} ${color?  color : "primary"} ${className || ""}`}
      type={type}
      href={href}
      onClick={onClick}
    >
      {(iconPosition === "left" || iconPosition === undefined) && iconSeExistir(icon, iconPosition)}
      {children}
      {texto?.toUpperCase() || ""}
      {iconPosition === "right" && iconSeExistir(icon, iconPosition)}
    </Button>
  );
}

