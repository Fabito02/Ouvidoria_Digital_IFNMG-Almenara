import Dropdown from "react-bootstrap/Dropdown";
import { Icon } from "@iconify-icon/react";

const PerfilHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "right",
        alignItems: "center",
        width: "175px"
      }}
    >
      <div className="botao-notificacao active">
        <Icon
          icon={"material-symbols:notifications-rounded"}
          style={{ marginRight: "15px", fontSize: "26px", color: "#00000066" }}
        />
      </div>
      <Dropdown>
        <Dropdown.Toggle
          as={"div"}
          id="dropdown-basic"
          style={{
            cursor: "pointer",
            width: "40px",
            minWidth: "40px",
            height: "40px",
            marginRight: "10px",
            borderRadius: "100px",
            overflow: "hidden",
          }}
        >
          <div className="user_icon">
            <img
              src="/pudim.png"
              alt="Ícone do Usuário"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/perfil">
            <Icon
              icon={"material-symbols:settings-rounded"}
              style={{ marginRight: "5px" }}
            />{" "}
            Configurações
          </Dropdown.Item>
          <Dropdown.Item href="/minhas-reclamacoes">
            <Icon
              icon={"material-symbols:feedback-rounded"}
              style={{ marginRight: "5px" }}
            />
            Minhas reclamações
          </Dropdown.Item>
          <Dropdown.Item href="#">
            <Icon
              icon={"material-symbols:logout-rounded"}
              style={{ marginRight: "5px" }}
            />
            Sair
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/*
       */}
    </div>
  );
};

export default PerfilHeader;
