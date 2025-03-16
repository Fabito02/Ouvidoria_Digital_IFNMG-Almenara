import Search from "./Search";
import PerfilHeader from "./PerfilHeader";

const Header = () => {
  return (
    <header
      className="lineBottom"
      style={{
        width: "100%",
        height: "70px",
        padding: "5px",
        position: "fixed",
        backgroundColor: "white",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <img
        className="ifnmg-imagem"
        src="/IFNMG - Almenara.png"
        alt="IFNMG - Almenara"
        style={{ height: "100%" }}
      ></img>
      <Search />
      <PerfilHeader />
    </header>
  );
};

export default Header;
