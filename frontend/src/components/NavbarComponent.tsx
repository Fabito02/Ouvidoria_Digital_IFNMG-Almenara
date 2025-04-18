import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Icon } from "@iconify-icon/react";

const NavbarComponent = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-[65px] left-0 w-full z-50 bg-white border-t border-b py-1.5 lg:flex justify-between mx-auto px-4 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{height: "45px"}}
    >
      <div className="hidden lg:flex space-x-4 justify-center w-full">
        <Link to="/home" className="link-navbar">HOME</Link>
        <Link to="/fale-conosco" className="link-navbar">FALE CONOSCO</Link>
        <Link to="/acompanhamento" className="link-navbar">ACOMPANHAMENTO</Link>
        <Link to="/informacoes" className="link-navbar">INFORMAÇÕES E FAQs</Link>
        <Link to="/regulamento" className="link-navbar">POLÍTICAS E REGULAMENTOS</Link>
      </div>
      <div className="lg:hidden ml-auto flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Icon icon="heroicons-solid:menu-alt-3" height="30px" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="menu-mobile-content mt-1 mr-2" sideOffset={5}>
            <Link to="/home">
              <DropdownMenuItem className="link-navbar-menu">HOME</DropdownMenuItem>
            </Link>
            <Link to="/fale-conosco">
              <DropdownMenuItem className="link-navbar-menu">FALE CONOSCO</DropdownMenuItem>
            </Link>
            <Link to="/acompanhamento">
              <DropdownMenuItem className="link-navbar-menu">ACOMPANHAMENTO</DropdownMenuItem>
            </Link>
            <Link to="/informacoes">
              <DropdownMenuItem className="link-navbar-menu">INFORMAÇÕES E FAQs</DropdownMenuItem>
            </Link>
            <Link to="/regulamento">
              <DropdownMenuItem className="link-navbar-menu">POLÍTICAS E REGULAMENTOS</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavbarComponent;