import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
import "./PerfilHeader.css";

const PerfilHeader = () => {
  return (
    <div className="flex flex-row justify-end items-center w-[125px]">
      <div className="botao-notificacao active">
        <Icon
          icon="material-symbols:notifications-rounded"
          className="mr-[15px] text-[26px] text-[#00000066]"
        />
      </div>

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-10  h-10 mr-2 cursor-pointer">
            <AvatarImage src="/pudim.png" alt="Ícone do Usuário" />
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="shadow-md w-[220px] mr-2 mt-3 rounded-lg dropdown border-0 rounded-[16px] menu-opcoes">
          <div className="flex gap-3 pl-2 py-2 border-b">
          <Avatar className="w-[45px] h-[45px]">
            <AvatarImage src="/pudim.png" alt="Ícone do Usuário" />
            <AvatarFallback>PN</AvatarFallback>
          </Avatar>
          <p className="font-medium username">Username</p>
          </div>

          <DropdownMenuItem asChild className="mt-1 rounded-[12px] item-dropdown">
            <Link to="/perfil" className="flex gap-2 link_item">
              <Icon icon="material-symbols:settings-rounded" className="iconMenu" />
              Configurações
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild className=" rounded-[12px] item-dropdown">
            <Link to="/minhas-manifestacoes" className="flex items-center gap-2 link_item">
              <Icon icon="material-symbols:feedback-rounded" className="iconMenu" />
              Minhas manifestações
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild className=" rounded-[12px] item-dropdown">
            <Link to="" className="flex items-center gap-2 link_item">
              <Icon icon="material-symbols:logout-rounded" className="iconMenu" />
              Sair
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PerfilHeader;
